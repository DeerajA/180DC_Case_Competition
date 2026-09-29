import {notFound} from 'next/navigation';
import Academy from '../../academy-v2';
import {catalog} from '../../data/catalog';
import {primers} from '../../data/learning';
const views:Record<string,string>={home:'Home',start:'New analyst path',cases:'Case library',learn:'Learn',practice:'Practice',resources:'Resources',events:'Events',progress:'Progress',account:'Account'};
export async function generateMetadata({params}:{params:Promise<{path:string[]}>}){const {path}=await params;const c=path[0]==='cases'&&catalog.find(c=>c.slug===path[1]);const p=path[0]==='learn'&&primers.find(p=>p.slug===path[1]);return {title:(c?c.title:p?p.title:views[path[0]]??'Not found')+' · 180DC Case Academy',description:'Case prep and social-impact consulting skills for 180DC UNC Charlotte members.'};}
export default async function Page({params,searchParams}:{params:Promise<{path:string[]}>;searchParams:Promise<{case?:string;mode?:string}>}){const {path}=await params;const query=await searchParams;if(!views[path[0]]||path.length>2||path[1]&&!(path[0]==='cases'&&catalog.some(c=>c.slug===path[1])||path[0]==='learn'&&primers.some(p=>p.slug===path[1])))notFound();return <Academy path={path} initialCase={query.case} initialMode={query.mode}/>;}
