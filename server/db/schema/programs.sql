CREATE TABLE IF NOT EXISTS "TENA_Admin".programs (
    id            SERIAL PRIMARY KEY,
    title         VARCHAR(255) NOT NULL,
    summary       TEXT,
    problem       TEXT,
    solution      TEXT,
    problem_image VARCHAR(255),
    solution_image VARCHAR(255),
    background_image VARCHAR(255),
    stat1         VARCHAR(255),
    stat2         VARCHAR(255),
    stat3         VARCHAR(255),
    stat4         VARCHAR(255),
    created_at    TIMESTAMP DEFAULT NOW(),
    updated_at    TIMESTAMP DEFAULT NOW()
);
