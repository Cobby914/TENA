import app from "./app.js";
import { env } from "./config/env.js";

const port = Number(env.port) || 3001;
const host = process.env.HOST || "0.0.0.0";

app.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});
