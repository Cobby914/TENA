# TENA Website

Full-stack web application built with a React (Vite) client and an Express server, backed by a PostgreSQL database on [Neon](https://neon.tech). Deployed on Vercel.

---

## Tech Stack

| Layer    | Technology                                          |
| -------- | --------------------------------------------------- |
| Client   | React 18, Vite 7, Chakra UI 2, React Router 7, Zustand, TanStack Query |
| Server   | Node.js, Express 4, `@neondatabase/serverless`      |
| Database | PostgreSQL (Neon)                                   |
| Auth     | Google via Firebase Auth (`signInWithPopup`); API uses **Firebase ID tokens** verified with `firebase-admin` |
| Deploy   | Vercel (static client + Node serverless API)        |

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
├── server/          # Express API server
│   └── .env.example # copy to server/.env
│   └── db/schema/   # Raw SQL schema files
├── api/             # Vercel serverless function handlers
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

   Run the SQL files in `server/db/schema/` against your Neon (or PostgreSQL) database in order to create the required tables. You can use the Neon dashboard's SQL editor, `psql`, or any other Postgres client:

   ```bash
   psql "$DATABASE_URL" -f server/db/schema/users.sql
   psql "$DATABASE_URL" -f server/db/schema/programs.sql
   # ... repeat for each schema file
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

## Deployment (Vercel)

The project is configured for Vercel via `vercel.json`:

- The **client** is built as a static site from `client/package.json` (output: `client/dist/`).
- Files under `api/` are deployed as **Node.js serverless functions**.
- All `/api/*` requests are routed to the matching `api/*.js` handler; everything else is served from the client build.

Configure the same keys your app reads from `server/.env.example` and `client/.env.example` in your host’s environment (e.g. Vercel project settings) for production builds and the API.
