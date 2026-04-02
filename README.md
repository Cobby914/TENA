# TENA Website

Full-stack web application built with a React (Vite) client and an Express server, backed by a PostgreSQL database on [Neon](https://neon.tech). Deployed on Vercel.

---

## Tech Stack

| Layer    | Technology                                          |
| -------- | --------------------------------------------------- |
| Client   | React 18, Vite 7, Chakra UI 2, React Router 7, Zustand, TanStack Query |
| Server   | Node.js, Express 4, `@neondatabase/serverless`      |
| Database | PostgreSQL (Neon)                                   |
| Auth     | Google Sign-In → Firebase Auth (`signInWithCredential`); API uses **Firebase ID tokens** verified with `firebase-admin` |
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
PORT=3001
NODE_ENV=development
```

**Firebase Admin (required for auth)** — download a service account JSON from [Firebase Console](https://console.firebase.google.com/) → Project settings → Service accounts → Generate new private key. Either:

- Point to the file (good for local dev):

  ```env
  FIREBASE_SERVICE_ACCOUNT_PATH=C:\path\to\your-service-account.json
  ```

- Or paste the **entire JSON on one line** (common for hosted environments):

  ```env
  FIREBASE_SERVICE_ACCOUNT_JSON={"type":"service_account",...}
  ```

> `DATABASE_URL` and one of `FIREBASE_SERVICE_ACCOUNT_PATH` / `FIREBASE_SERVICE_ACCOUNT_JSON` are **required** on startup.

### Client (`client/.env`)

Create a file at `client/.env` with the following keys:

```env
VITE_GOOGLE_CLIENT_ID=your_google_oauth_web_client_id
VITE_API_BASE_URL=http://localhost:3001
```

**Firebase web app (required for sign-in)** — same project as the Admin SDK. From Firebase Console → Project settings → Your apps → Web app:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
# Optional, for Google Analytics in Firebase
VITE_FIREBASE_MEASUREMENT_ID=
```

In **Firebase Console → Authentication → Sign-in method**, enable **Google** and use the **same** OAuth Web client ID (and client secret) as `VITE_GOOGLE_CLIENT_ID` so `signInWithCredential` succeeds.

> `VITE_API_BASE_URL` is optional and defaults to `http://localhost:3001` if not set.

The client obtains a **Firebase ID token** after Google sign-in (`client/src/pages/Login.jsx`) and sends it to the API; `withAuthHeaders()` refreshes the token via `getAuth().currentUser.getIdToken()`. Keep service account JSON out of git (see `.gitignore`: `firebase-adminsdk.json`).

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
| `FIREBASE_SERVICE_ACCOUNT_JSON` or `FIREBASE_SERVICE_ACCOUNT_PATH` | Server (verify ID tokens) |
| `VITE_GOOGLE_CLIENT_ID` | Client build |
| `VITE_API_BASE_URL` | Client build   |
| `VITE_FIREBASE_*`   | Client build   |

Set these under **Project Settings → Environment Variables** in the Vercel dashboard before deploying.
