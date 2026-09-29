import {z} from 'zod';
export const dimensions=['Structure','Math','Exhibit insight','Impact judgment','Synthesis'];
export const lessonIds=['structure','math','exhibits','impact','synthesis'];
export const stateSchema=z.object({
 profile:z.object({name:z.string().max(100),graduationYear:z.string().max(4),role:z.enum(['New analyst','Returning member','Officer'])}),
 completed:z.record(z.number()),
 answers:z.record(z.object({structure:z.string().max(8000),math:z.string().max(8000),recommendation:z.string().max(8000)})),
 scores:z.array(z.object({id:z.string().max(100),caseId:z.string().max(100),at:z.number(),mode:z.enum(['case','solo','partner']),values:z.array(z.number().int().min(1).max(4)).length(5)})).max(500),
 mocks:z.array(z.object({id:z.string().max(100),caseId:z.string().max(100),at:z.number(),mode:z.enum(['solo','partner']),transcript:z.string().max(40000).optional()})).max(200),
 mathBest:z.number().min(0).max(10),plan:z.record(z.boolean())
});
export type AcademyState=z.infer<typeof stateSchema>;
export const emptyState=():AcademyState=>({profile:{name:'',graduationYear:'',role:'New analyst'},completed:{},answers:{},scores:[],mocks:[],mathBest:0,plan:{}});
export const hasProgress=(s:AcademyState)=>Object.keys(s.completed).length>0||Object.values(s.answers).some(a=>a.structure||a.math||a.recommendation)||s.scores.length>0||s.mocks.length>0||s.mathBest>0||Object.values(s.plan).some(Boolean);
// Combines browser-only guest progress into an account without discarding either side.
export function mergeStates(account:AcademyState,guest:AcademyState):AcademyState{
 const completed={...account.completed};for(const [k,v] of Object.entries(guest.completed))completed[k]=completed[k]?Math.min(completed[k],v):v;
 const answers={...account.answers};for(const [k,v] of Object.entries(guest.answers)){const a=answers[k];if(!a||!(a.structure||a.math||a.recommendation))answers[k]=v;}
 const byId=<T extends {id:string;at:number}>(a:T[],b:T[],max:number)=>Array.from(new Map([...a,...b].map(x=>[x.id,x] as const)).values()).sort((x,y)=>x.at-y.at).slice(-max);
 const plan={...account.plan};for(const [k,v] of Object.entries(guest.plan))plan[k]=plan[k]||v;
 const profile=account.profile.name?account.profile:{...guest.profile,role:account.profile.role};
 return {profile,completed,answers,scores:byId(account.scores,guest.scores,500),mocks:byId(account.mocks,guest.mocks,200),mathBest:Math.max(account.mathBest,guest.mathBest),plan};
}
