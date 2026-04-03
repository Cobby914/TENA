# TENA Website

Full-stack web application: **React (Vite)** frontend, **Express** API, **PostgreSQL** on [Neon](https://neon.tech). Production is set up for **[Vercel](https://vercel.com)** (static site + serverless API). The API can also run on **[Render](https://render.com)** as an optional long-running service—see [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

---

## Documentation

| Doc | Contents |
| --- | -------- |
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | **Vercel** (builds, routes, env vars), **Neon** (database, schema, migrations), **Render** (optional Web Service for Express) and how they connect |

---

## Tech Stack

| Layer    | Technology                                          |
| -------- | --------------------------------------------------- |
| Client   | React 18, Vite 7, Chakra UI 2, React Router 7, Zustand, TanStack Query |
| Server   | Node.js, Express 4, `@neondatabase/serverless`      |
| Database | PostgreSQL (Neon)                                   |
| Auth     | Google via Firebase Auth (`signInWithPopup`); API uses **Firebase ID tokens** verified with `firebase-admin` |
| Deploy   | **Vercel** — static client + Node serverless API (`api/index.js`). Optional: **Render** for the API only |

---

## Prerequisites

- **Node.js** v18 or later
- **npm** v8 or later (workspaces support required)
- A **Neon** PostgreSQL database (or any PostgreSQL-compatible `DATABASE_URL`)
- A **Firebase** project with **Google** sign-in enabled (OAuth client is configured inside Firebase / its linked Google Cloud project)

---

## Project Structure

```
TENA/
├── client/          # React + Vite SPA (`src/auth/`, `src/components/auth/` — Google admin sign-in)
│   └── .env.example # copy to client/.env (see Local Development)
├── server/          # Express API (used locally, on Render, and imported by Vercel’s api/)
│   └── .env.example # copy to server/.env
│   └── db/schema/   # Raw SQL schema files
├── api/             # Vercel serverless entry: exports Express app from server/
├── docs/            # Deployment guides (Vercel, Neon, Render)
├── vercel.json      # Vercel deployment config
└── package.json     # Root workspace (runs both client & server)
```

---

## Local Development Setup

1. **Clone the repository**

   ```bash
   git clone <repo-url>
   cd TENA
   ```

2. **Install dependencies** (installs for root, client, and server via workspaces)

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy `server/.env.example` → `server/.env` and `client/.env.example` → `client/.env`, then fill in secrets.

4. **Set up the database**

   Create the app schema if needed, then run the SQL files in `server/db/schema/` against your Neon (or PostgreSQL) database. See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md#neon-postgresql) for schema creation and a suggested file order.

   ```bash
   psql "$DATABASE_URL" -f server/db/schema/users.sql
   psql "$DATABASE_URL" -f server/db/schema/oauth_accounts.sql
   # ... repeat for each schema file (see deployment doc for ordering)
   ```

5. **Start the development servers** (client + server run concurrently)

   ```bash
   npm run dev
   ```

   | Service | URL                      |
   | ------- | ------------------------ |
   | Client  | http://localhost:5173    |
   | Server  | http://localhost:3001    |

6. **Mobile / LAN testing** (exposes client on your local network IP)

   ```bash
   npm run dev:mobile
   ```

---

## Available Scripts

| Command              | Description                                           |
| -------------------- | ----------------------------------------------------- |
| `npm run dev`        | Start both client and server in development mode      |
| `npm run dev:mobile` | Same as `dev` but client is exposed on your LAN       |
| `npm run build`      | Build the client for production (`client/dist/`)      |

---

## Deployment overview

**Default (Vercel):** The client is built from `client/`; `/api/*` is handled by a serverless function that loads the same Express app as local dev (`api/index.js` → `server/src/app.js`). Configure production env vars in the Vercel project to match `server/.env.example` and `client/.env.example`.

**Optional (Render):** Deploy the `server` folder as a Render Web Service and set `VITE_API_BASE_URL` on the client to that service URL.

Step-by-step instructions, environment variable tables, and architecture notes are in **[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)**.
