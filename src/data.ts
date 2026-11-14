import type { Job, Run } from './types';
export const initialJobs: Job[] = [
 { id:'JOB-001', name:'nightly-etl-sync', schedule:'0 2 * * *', description:'Warehouse ingestion · production', status:'Active', lastRun:'Today, 02:00:04', duration:'4m 32s', nextRun:'Tomorrow, 02:00', runs:128 },
 { id:'JOB-002', name:'vector-index-compact', schedule:'*/15 * * * *', description:'Vector store maintenance', status:'Active', lastRun:'4 min ago', duration:'18s', nextRun:'In 11 min', runs:2048 },
 { id:'JOB-003', name:'daraja-reconcile', schedule:'*/30 * * * *', description:'Payments · reconciliation worker', status:'Retrying', lastRun:'2 min ago', duration:'—', nextRun:'Retry in 24s', runs:842 },
 { id:'JOB-004', name:'github-streak-backup', schedule:'0 0 * * *', description:'Developer activity snapshot', status:'Paused', lastRun:'Yesterday, 00:00', duration:'9s', nextRun:'Paused', runs:61 }
];
export const initialRuns: Run[] = [
 { id:'run_a82f1', job:'nightly-etl-sync', status:'Success', time:'02:00:04.281', duration:'4m 32s', exitCode:0, message:'Pipeline completed. 24,891 rows synchronized across 6 tables.' },
 { id:'run_a82e9', job:'daraja-reconcile', status:'Retrying', time:'06:58:12.004', duration:'12.4s', exitCode:1, message:'Upstream gateway timeout. Retry scheduled with exponential backoff.' },
 { id:'run_a82d0', job:'vector-index-compact', status:'Success', time:'06:54:00.117', duration:'18.2s', exitCode:0, message:'Compaction complete. 1.2M vectors optimized.' },
 { id:'run_a82b1', job:'github-streak-backup', status:'Failed', time:'00:00:02.901', duration:'2.9s', exitCode:1, message:'Job paused by operator before execution.' }
];