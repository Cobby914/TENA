CREATE TABLE IF NOT EXISTS "TENA_Admin".program_stats (
    id              SERIAL PRIMARY KEY,
    program_id      INT NOT NULL,
    label           VARCHAR(100) NOT NULL,
    value           VARCHAR(100) NOT NULL,
    description     TEXT,

    FOREIGN KEY (program_id)
        REFERENCES "TENA_Admin".programs(id)
        ON DELETE CASCADE
);
