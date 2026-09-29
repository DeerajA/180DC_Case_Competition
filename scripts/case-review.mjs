// Prints a Markdown review of every case (brief, exhibits, math, model answer) for checking before publishing.
import fs from 'node:fs';import os from 'node:os';import path from 'node:path';import ts from 'typescript';import {pathToFileURL} from 'node:url';
const dir=fs.mkdtempSync(path.join(os.tmpdir(),'academy-review-'));
for(const name of ['catalog','new-cases']){const src=ts.transpileModule(fs.readFileSync(`app/data/${name}.ts`,'utf8'),{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText.replace(/from '\.\/(.*?)'/g,"from './$1.mjs'");fs.writeFileSync(path.join(dir,name+'.mjs'),src);}
const {catalog}=await import(pathToFileURL(path.join(dir,'catalog.mjs')));
const esc=s=>String(s).replace(/\|/g,'\\|');
let md='# Case review\n\nEvery case in the library, generated from `app/data/catalog.ts` and `app/data/new-cases.ts`. All clients, quantities, rates and budgets are fictional teaching assumptions. Use this to check each brief, exhibit and calculation before publishing.\n\nRegenerate after editing cases: `node scripts/case-review.mjs > CASE-REVIEW.md`.\n';
for(const track of ['Social impact core','Interview fundamentals','Advanced electives']){
 md+=`\n## ${track}\n`;
 for(const c of catalog.filter(c=>c.track===track)){
  md+=`\n### ${c.title}\n\n*${c.client} · ${c.caseType} · ${c.difficulty}, ${c.minutes} min · \`/academy/cases/${c.slug}\`*\n\n${c.brief}\n\n**Objective:** ${c.objective}\n\n**Question:** ${c.question}\n\n**Facts**\n\n${c.facts.map(f=>'- '+f).join('\n')}\n`;
  for(const e of c.exhibits){md+=`\n**Exhibit: ${e.title}** (${e.units})\n\n| ${e.rows[0].map(esc).join(' | ')} |\n|${e.rows[0].map(()=>' --- ').join('|')}|\n${e.rows.slice(1).map(r=>'| '+r.map(esc).join(' | ')+' |').join('\n')}\n`;}
  md+=`\n**Worked math**\n\n${c.solution.math.map(m=>'- '+m).join('\n')}\n\n**Model answer:** ${c.solution.modelAnswer}\n\n**Recommendation:** ${c.solution.recommendation}\n`;
 }
}
process.stdout.write(md);
fs.rmSync(dir,{recursive:true});
