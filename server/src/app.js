import express from "express";
import cors from "cors";
import { sql } from "./db/index.js";
import routes from "./routes/index.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors());
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
