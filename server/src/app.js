import express from "express";
import cors from "cors";
import { sql } from "./db/index.js";
import routes from "./routes/index.js";
import { errorHandler } from "./middleware/errorHandler.js";

function buildAllowedOrigins() {
  const fromEnv =
    process.env.CORS_ORIGINS?.split(",")
      .map((s) => s.trim())
      .filter(Boolean) ?? [];
  if (process.env.NODE_ENV !== "production") {
    const dev = [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "http://localhost:5174",
      "http://127.0.0.1:5174",
    ];
    return [...new Set([...fromEnv, ...dev])];
  }
  return fromEnv;
}

const allowedOrigins = buildAllowedOrigins();

const app = express();

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      callback(null, false);
    },
  })
);
app.use(express.json());

app.get("/", (req, res) => res.send("Server is Working!"));
app.get("/health", (req, res) => res.json({ ok: true }));

app.get("/api/health", async (req, res) => {
  try {
    const result = await sql`SELECT NOW()`;
    res.status(200).json({ ok: true, dbTime: result[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.use("/api", routes);

app.use(errorHandler);

export default app;
