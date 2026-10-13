// Checks that /api/state rejects a stale save (two tabs) instead of overwriting. Run with `npm run dev` going:
// node scripts/check-state-api.mjs [http://localhost:5173]
import assert from 'node:assert/strict';
const base=process.argv[2]??'http://localhost:5173';
const signin=await fetch(base+'/signin-with-chatgpt?return_to=/',{redirect:'manual'});
const cookie=signin.headers.getSetCookie().map(c=>c.split(';')[0]).join('; ');
assert.ok(cookie,'local mock sign-in did not set a cookie');
const get=await fetch(base+'/api/state',{headers:{cookie}}).then(r=>r.json());
assert.ok(get.user,'not signed in');
const save=revision=>fetch(base+'/api/state',{method:'POST',headers:{cookie,origin:base,'content-type':'application/json'},body:JSON.stringify({state:get.state,revision})});
assert.equal((await save(get.revision)).status,200,'fresh save should succeed');
assert.equal((await save(get.revision)).status,409,'stale save should be rejected');
assert.equal((await fetch(base+'/api/state',{method:'POST',headers:{cookie,origin:'https://evil.example','content-type':'application/json'},body:'{}'})).status,403,'cross-origin save should be rejected');
console.log('PASS: fresh save accepted, stale save rejected (409), cross-origin save rejected (403).');
