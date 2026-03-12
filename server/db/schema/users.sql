CREATE TABLE IF NOT EXISTS "TENA_Admin".users (
    id              SERIAL PRIMARY KEY,
    email           VARCHAR(255) UNIQUE NOT NULL,
    password_hash   TEXT,
    auth_type       VARCHAR(20) NOT NULL,
    role            VARCHAR(20) DEFAULT 'pending',
    is_verified     BOOLEAN DEFAULT false,
    created_at      TIMESTAMP DEFAULT NOW(),
    updated_at      TIMESTAMP DEFAULT NOW(),

    CHECK (auth_type IN ('local', 'oauth')),
    CHECK (role IN ('pending', 'user', 'admin', 'denied')),
    CHECK (
        (auth_type = 'local' AND password_hash IS NOT NULL)
        OR
        (auth_type = 'oauth' AND password_hash IS NULL)
    )
);

CREATE UNIQUE INDEX IF NOT EXISTS users_email_lower_uidx
    ON "TENA_Admin".users (LOWER(email));
