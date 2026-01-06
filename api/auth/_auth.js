export function requireAuth(req, res) {
  const key = req.headers["x-api-key"];
  if (key !== process.env.API_SECRET_KEY) {
    res.status(401).json({ error: "Unauthorized" });
    return false;
  }
  return true;
}