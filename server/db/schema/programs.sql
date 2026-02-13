SET search_path TO "TENA_Admin";

CREATE TABLE IF NOT EXISTS programs (
    id          SERIAL PRIMARY KEY,
    title       VARCHAR(255) NOT NULL,
    summary     TEXT,
    problem     TEXT,
    solution    TEXT,
    created_at  TIMESTAMP DEFAULT NOW(),
    updated_at  TIMESTAMP DEFAULT NOW()
);
