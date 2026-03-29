export function errorHandler(err, req, res, next) {
  console.error(err);

  const isProd = process.env.NODE_ENV === "production";

  res.status(500).json(
    isProd
      ? { error: "Internal Server Error" }
      : {
          error: "Internal Server Error",
          message: err?.message ?? "Unknown error",
          code: err?.code ?? null
        }
  );
}
