CREATE TABLE IF NOT EXISTS "TENA_Admin".programs (
    id          SERIAL PRIMARY KEY,
    title       VARCHAR(255) NOT NULL,
    summary     TEXT,
    problem     TEXT,
    solution    TEXT,
    image_key   VARCHAR(255),
    link        VARCHAR(255),
    created_at  TIMESTAMP DEFAULT NOW(),
    updated_at  TIMESTAMP DEFAULT NOW()
);
