const names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
export function describeCron(expression: string): string {
 const parts = expression.trim().split(/\s+/); if (parts.length !== 5) return 'Enter a valid 5-field cron expression';
 const [min,hour,day,,weekday] = parts;
 if (expression === '*/15 * * * *') return 'Every 15 minutes';
 if (expression === '*/30 * * * *') return 'Every 30 minutes';
 if (expression === '0 2 * * *') return 'Every day at 02:00 UTC';
 if (expression === '0 0 * * *') return 'Every day at midnight UTC';
 if (expression === '0 9 * * 1-5') return 'Weekdays at 09:00 UTC';
 if (min?.startsWith('*/') && hour === '*') return `Every ${min.slice(2)} minutes`;
 if (min !== '*' && hour !== '*' && day === '*' && weekday === '*') return `Every day at ${hour?.padStart(2,'0')}:${min?.padStart(2,'0')} UTC`;
 if (weekday !== '*') return `At ${hour === '*' ? 'every hour' : hour + ':' + (min === '*' ? '00' : min.padStart(2,'0'))} on ${weekday === '1-5' ? 'weekdays' : names[Number(weekday)] ?? 'selected days'}`;
 return `Custom schedule · ${expression}`;
}
export function nextRuns(expression: string, count = 5): Date[] {
 const parts = expression.trim().split(/\s+/); if (parts.length !== 5) return [];
 const [minute,hour,day,month,weekday] = parts;
 const matches = (field: string, value: number) => field === '*' || field === String(value) || (field.startsWith('*/') && Number(field.slice(2)) > 0 && value % Number(field.slice(2)) === 0) || (field.includes('-') && value >= Number(field.split('-')[0]) && value <= Number(field.split('-')[1]));
 const result: Date[] = []; const cursor = new Date(); cursor.setSeconds(0,0); cursor.setMinutes(cursor.getMinutes()+1);
 for (let i=0; i<60*24*370 && result.length<count; i++, cursor.setMinutes(cursor.getMinutes()+1)) {
  if (matches(minute!,cursor.getMinutes()) && matches(hour!,cursor.getHours()) && matches(day!,cursor.getDate()) && matches(month!,cursor.getMonth()+1) && matches(weekday!,cursor.getDay())) result.push(new Date(cursor));
 }
 return result;
}