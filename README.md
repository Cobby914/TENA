# TENA Website

Full-stack web application built with a React (Vite) client and an Express server, backed by a PostgreSQL database on [Neon](https://neon.tech). Deployed on Vercel.

---

## Tech Stack

| Layer    | Technology                                          |
| -------- | --------------------------------------------------- |
| Client   | React 18, Vite 7, Chakra UI 2, React Router 7, Zustand, TanStack Query |
| Server   | Node.js, Express 4, `@neondatabase/serverless`      |
| Database | PostgreSQL (Neon)                                   |
| Auth     | Google OAuth (`@react-oauth/google`, `google-auth-library`) |
| Deploy   | Vercel (static client + Node serverless API)        |

---

## Prerequisites

- **Node.js** v18 or later
- **npm** v8 or later (workspaces support required)
- A **Neon** PostgreSQL database (or any PostgreSQL-compatible `DATABASE_URL`)
- A **Google OAuth 2.0** Client ID (from [Google Cloud Console](https://console.cloud.google.com/))

---

## Project Structure

```
TENA/
├── client/          # React + Vite SPA
├── server/          # Express API server
│   └── db/schema/   # Raw SQL schema files
├── api/             # Vercel serverless function handlers
├── vercel.json      # Vercel deployment config
└── package.json     # Root workspace (runs both client & server)
```

---

## Environment Variables

### Server (`server/.env`)

Create a file at `server/.env` with the following keys:

```env
DATABASE_URL=your_neon_postgres_connection_string
GOOGLE_CLIENT_ID=your_google_oauth_client_id
PORT=3001
NODE_ENV=development
```

> `DATABASE_URL` and `GOOGLE_CLIENT_ID` are **required** — the server will throw an error on startup if either is missing.

### Client (`client/.env`)

Create a file at `client/.env` with the following keys:

```env
VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id
VITE_API_BASE_URL=http://localhost:3001
```

> `VITE_API_BASE_URL` is optional and defaults to `http://localhost:3001` if not set.

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

   Copy the examples above into `server/.env` and `client/.env`, filling in your real values.

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

**Required environment variables in Vercel:**

| Variable            | Used by        |
| ------------------- | -------------- |
| `DATABASE_URL`      | Server & `api/`|
| `GOOGLE_CLIENT_ID`  | Server         |
| `VITE_GOOGLE_CLIENT_ID` | Client build |
| `VITE_API_BASE_URL` | Client build   |

Set these under **Project Settings → Environment Variables** in the Vercel dashboard before deploying.
