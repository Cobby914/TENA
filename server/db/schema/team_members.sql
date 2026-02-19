SET search_path TO "TENA_Admin";

CREATE TABLE IF NOT EXISTS team_members (
    id          SERIAL PRIMARY KEY,
    first_name  VARCHAR(100) NOT NULL,
    last_name   VARCHAR(100) NOT NULL,
    role        VARCHAR(100),
    bio         TEXT,
    image_key   VARCHAR(255),
    created_at  TIMESTAMP DEFAULT NOW()
);
