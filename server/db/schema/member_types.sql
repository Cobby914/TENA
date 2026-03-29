SET search_path TO "TENA_Admin";

CREATE TABLE IF NOT EXISTS member_types (
    id      SERIAL PRIMARY KEY,
    name    VARCHAR(50) NOT NULL UNIQUE
);

