# ChronoPulse

ChronoPulse is a developer-focused background job orchestration dashboard, visual cron builder, and worker telemetry interface.

## Features
- Live UTC and East Africa Time clock display
- Interactive five-field cron builder with readable descriptions and next-run previews
- Job registry with filtering, pause/resume, manual run, and job creation
- Execution history with selectable worker output and exit-code indicators
- Worker fleet, cluster health, system events, and responsive dark dashboard
- GitHub Actions build workflow and Vercel SPA rewrite configuration

## Development
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Vercel
Import `kennedy-blip/chronopip` into Vercel. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`. Install command: `npm install`.

## Backend integration
The current interface intentionally runs in local demo mode. Job actions update client-side state and do not dispatch real workloads. Before production use, connect an authenticated scheduler API and worker service, enforce authorization, validate cron schedules server-side, and persist job/run state in a database. Never expose worker credentials in client-side environment variables.
