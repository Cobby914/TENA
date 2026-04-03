# Deployment: Vercel, Neon, and Render

This document explains how the TENA stack uses **Neon** (PostgreSQL), **Vercel** (primary production setup: static client + serverless API), and how to run the same API on **Render** (long-lived Node service) if you prefer a separate backend host.

---

## How the pieces fit together

```mermaid
flowchart LR
  subgraph browser [Browser]
    Client[React SPA]
  end
  subgraph vercel [Vercel]
    Static[Static files from client/dist]
    Fn[Serverless: api/index.js]
  end
  subgraph render [Render optional]
    API[Web Service: Express]
  end
  subgraph neon [Neon]
    PG[(PostgreSQL)]
  end
  Client --> Static
  Client -->|"/api same origin" or VITE_API_BASE_URL| Fn
  Client -->|optional split deploy| API
  Fn --> PG
  API --> PG
```

- **Neon** holds all application data. The server connects with `DATABASE_URL` using [`@neondatabase/serverless`](https://github.com/neondatabase/serverless), which works well from both Vercel functions and traditional Node processes.
- **Vercel** serves the Vite-built client and routes `/api/*` to one Express app exported from `api/index.js` (see `vercel.json`).
- **Render** is optional: deploy the `server` package as a **Web Service** when you want a always-on Express process instead of (or alongside) Vercel’s serverless handler. If the client stays on Vercel, point it at Render with `VITE_API_BASE_URL`.

---

## Neon (PostgreSQL)

### 1. Create a project

1. Sign up at [neon.tech](https://neon.tech) and create a project.
2. Create a database (Neon’s default is often `neondb`).
3. Copy the **connection string** from the dashboard. It should use SSL, for example:

   `postgresql://USER:PASSWORD@HOST.neon.tech/neondb?sslmode=require`

### 2. Schema and migrations

The app uses the PostgreSQL schema `"TENA_Admin"`. If it does not exist yet, create it once (Neon SQL editor or `psql`):

```sql
CREATE SCHEMA IF NOT EXISTS "TENA_Admin";
```

Then run the SQL files under `server/db/schema/` in an order that respects foreign keys. A typical order:

1. `users.sql`
2. `oauth_accounts.sql`
3. `programs.sql`
4. `cohorts.sql`, `member_types.sql`, `team_members.sql`, `team_member_types.sql`, `program_stats.sql`, `company_info.sql`, `newsletter_subscribers.sql`
5. Any `programs_migration_*.sql` files if you are applying incremental changes to an existing database

Example with `psql`:

```bash
psql "$DATABASE_URL" -f server/db/schema/users.sql
psql "$DATABASE_URL" -f server/db/schema/oauth_accounts.sql
# ...continue for remaining files
```

### 3. Environment variable

Set **`DATABASE_URL`** to the Neon connection string everywhere the API runs (local `server/.env`, Vercel, Render, etc.).

### Notes

- **Branches / preview DBs:** Neon supports database branching; you can attach a branch URL to preview deployments in Vercel if you automate it.
- **Serverless + Neon:** `@neondatabase/serverless` is intended for short-lived environments (like Vercel functions) and talks to Neon over HTTP. No code changes are required when moving the same app to Render’s Node runtime; the same driver and `DATABASE_URL` work.

---

## Vercel

### What this repo deploys

| Build | Source | Output / runtime |
| ----- | ------ | ---------------- |
| Static site | `client/package.json` | `client/dist/` via `@vercel/static-build` |
| API | `api/index.js` | Node serverless function via `@vercel/node` |

`api/index.js` re-exports the Express app from `server/src/app.js`, so routes under `/api` on the deployed site match local development.

Routing (from `vercel.json`):

- Requests to `/api/*` go to the serverless function.
- Everything else is served from `client/dist/`.

### Project setup

1. Import the Git repository in the [Vercel dashboard](https://vercel.com).
2. Keep the **project root** at the repository root (where `vercel.json` lives) so both builds resolve correctly.
3. **Install:** Vercel should run `npm install` at the root so npm workspaces install `client` and `server` dependencies. The API bundle needs `server/` on disk when the function is built.

### Environment variables

Add the variables your app expects (mirror `server/.env.example` and `client/.env.example`):

**Serverless API (server-side)**

| Variable | Purpose |
| -------- | ------- |
| `DATABASE_URL` | Neon connection string |
| `FIREBASE_SERVICE_ACCOUNT_JSON` or `FIREBASE_SERVICE_ACCOUNT_PATH` | Firebase Admin SDK (verify ID tokens) |
| `ALLOWED_AUTH_EMAIL_DOMAINS` | Optional; comma-separated domains for auth restrictions |
| `NODE_ENV` | Set to `production` for production |

**Client build (exposed to the browser as `VITE_*`)**

| Variable | Purpose |
| -------- | ------- |
| `VITE_FIREBASE_*` | Firebase web app config from the Firebase console |
| `VITE_API_BASE_URL` | **Omit** for same-origin `/api` on Vercel. Set only if the API is hosted elsewhere (e.g. Render). |
| `VITE_GOOGLE_HOSTED_DOMAIN` | Optional |

After changing `VITE_*` variables, trigger a new deployment so Vite embeds the updated values.

### Verification

- Open `https://<your-deployment>/api/health` — should return JSON including database time if `DATABASE_URL` is correct.

---

## Render (optional Web Service for the API)

Use Render when you want the Express server to run as a **continuous web process** (not serverless). The client can remain on Vercel; set **`VITE_API_BASE_URL`** to your Render service URL (no trailing slash) and redeploy the client.

### Create a Web Service

1. In the [Render dashboard](https://render.com), create a **Web Service** connected to the same repository.
2. **Root directory:** `server`
3. **Runtime:** Node
4. **Build command:** `npm install`
5. **Start command:** `npm start` (runs `node src/server.js`)

Render sets **`PORT`** automatically; the server already uses `process.env.PORT` via `server/src/config/env.js`.

### Environment variables

Set the same server-side variables as on Vercel:

- `DATABASE_URL`
- `FIREBASE_SERVICE_ACCOUNT_JSON` (recommended on Render; avoid file paths unless you attach a persistent disk)
- Optional: `ALLOWED_AUTH_EMAIL_DOMAINS`, `NODE_ENV=production`

### CORS

The app uses `cors()` without a strict origin list. For production hardening you may want to restrict origins to your Vercel domain; that would be a deliberate code change.

### Client configuration

In Vercel (or local `.env`), set:

```bash
VITE_API_BASE_URL=https://your-service.onrender.com
```

The client’s `getApiBaseUrl()` will then call your Render API instead of same-origin `/api`.

---

## Quick reference

| Concern | Where to configure |
| ------- | ------------------ |
| Postgres URL | Neon dashboard → connection string → `DATABASE_URL` |
| Firebase web keys | Firebase console → `VITE_*` on Vercel (and `client/.env` locally) |
| Firebase Admin | `FIREBASE_SERVICE_ACCOUNT_JSON` on Vercel / Render |
| Static + serverless API | Vercel + `vercel.json` |
| Long-running API only | Render Web Service in `server/` + `VITE_API_BASE_URL` on the client |

For local development, see the root [README](../README.md).
