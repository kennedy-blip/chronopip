import { useEffect, useState } from 'react';
import { Activity, Clock3, Plus, RadioTower, Zap } from 'lucide-react';
interface Props { activeCount:number; onNew:()=>void; onTriggerAll:()=>void; }
export default function SchedulerHeader({activeCount,onNew,onTriggerAll}:Props) {
 const [now,setNow] = useState(new Date());
 useEffect(()=>{ const timer=window.setInterval(()=>setNow(new Date()),1000); return ()=>window.clearInterval(timer); },[]);
 const fmt=(date:Date,zone:string)=>new Intl.DateTimeFormat('en-GB',{timeZone:zone,hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(date);
 return <header className="topbar"><div className="brand"><div className="brand-mark"><Activity size={20}/></div><div><strong>chrono<span>pulse</span></strong><small>ORCHESTRATION / CONTROL PLANE</small></div></div><div className="top-center"><span className="health-dot"/><span>Worker Daemon: <b>Healthy</b></span><i/> <span className="mono">{activeCount} Active Jobs</span></div><div className="top-actions"><div className="clock-badge"><Clock3 size={14}/><span className="mono">UTC {fmt(now,'UTC')}</span><span className="clock-divider"/><span className="mono">EAT {fmt(now,'Africa/Nairobi')}</span></div><button className="btn btn-ghost" onClick={onTriggerAll}><Zap size={15}/> Trigger All</button><button className="btn btn-primary" onClick={onNew}><Plus size={16}/> New Scheduled Job</button></div></header>;
}