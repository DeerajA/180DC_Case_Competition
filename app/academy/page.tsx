import {redirect} from 'next/navigation';
import {getChatGPTUser} from '../chatgpt-auth';
export const dynamic='force-dynamic';
export default async function Page({searchParams}:{searchParams:Promise<{view?:string}>}){const q=await searchParams;const legacy:Record<string,string>={Library:'cases',Learn:'learn','Mock interview':'practice',Resources:'resources',Events:'events',Progress:'progress',Account:'account'};if(q.view&&legacy[q.view])redirect('/academy/'+legacy[q.view]);const user=await getChatGPTUser();redirect(user?'/academy/home':'/academy/cases');}
