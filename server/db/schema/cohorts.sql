SET search_path TO "TENA_Admin";

CREATE TABLE IF NOT EXISTS cohorts (
    id          SERIAL PRIMARY KEY,
    year        INT NOT NULL,
    term        VARCHAR(50) NOT NULL,
    term_order  INT NOT NULL,
    name        VARCHAR(120) NOT NULL,
    created_at  TIMESTAMP DEFAULT NOW()
);

