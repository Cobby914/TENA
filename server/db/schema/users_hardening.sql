SET search_path TO "TENA_Admin";

ALTER TABLE users
    ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP DEFAULT NOW();

UPDATE users
SET email = LOWER(TRIM(email))
WHERE email <> LOWER(TRIM(email));

UPDATE users
SET role = 'pending'
WHERE role IS NULL OR TRIM(role) = '';

ALTER TABLE users
    ALTER COLUMN role SET DEFAULT 'pending';

ALTER TABLE users
    DROP CONSTRAINT IF EXISTS users_role_check;

ALTER TABLE users
    ADD CONSTRAINT users_role_check
    CHECK (role IN ('pending', 'user', 'admin', 'denied'));

ALTER TABLE users
    DROP CONSTRAINT IF EXISTS users_auth_type_check;

ALTER TABLE users
    ADD CONSTRAINT users_auth_type_check
    CHECK (auth_type IN ('local', 'oauth'));

ALTER TABLE users
    DROP CONSTRAINT IF EXISTS users_check;

ALTER TABLE users
    ADD CONSTRAINT users_check
    CHECK (
        (auth_type = 'local' AND password_hash IS NOT NULL)
        OR
        (auth_type = 'oauth' AND password_hash IS NULL)
    );

CREATE UNIQUE INDEX IF NOT EXISTS users_email_lower_uidx
    ON users (LOWER(email));
