import app from "./app.js";
import { env } from "./config/env.js";

const port = Number(env.port) || 3001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
