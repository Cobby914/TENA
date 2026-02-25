import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Server is Working!"));
app.get("/health", (req, res) => res.json({ ok: true }));

app.use("/api", routes);

app.use(errorHandler);

export default app;
