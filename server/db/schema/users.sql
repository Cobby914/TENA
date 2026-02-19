SET search_path TO "TENA_Admin";

CREATE TABLE IF NOT EXISTS users (
    id              SERIAL PRIMARY KEY,
    email           VARCHAR(255) UNIQUE NOT NULL,
    password_hash   TEXT,
    auth_type       VARCHAR(20) NOT NULL,
    role            VARCHAR(20) DEFAULT 'pending',
    is_verified     BOOLEAN DEFAULT false,
    created_at      TIMESTAMP DEFAULT NOW(),

    CHECK (auth_type IN ('local', 'oauth')),
    CHECK (
        (auth_type = 'local' AND password_hash IS NOT NULL)
        OR
        (auth_type = 'oauth' AND password_hash IS NULL)
    )
);
