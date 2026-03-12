ALTER TABLE "TENA_Admin".users
    ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP DEFAULT NOW();

UPDATE "TENA_Admin".users
SET email = LOWER(TRIM(email))
WHERE email <> LOWER(TRIM(email));

UPDATE "TENA_Admin".users
SET role = 'pending'
WHERE role IS NULL OR TRIM(role) = '';

UPDATE "TENA_Admin".users
SET auth_type = LOWER(TRIM(auth_type))
WHERE auth_type IS NOT NULL AND auth_type <> LOWER(TRIM(auth_type));

UPDATE "TENA_Admin".users
SET auth_type = 'oauth'
WHERE (auth_type IS NULL OR auth_type NOT IN ('local', 'oauth')) AND password_hash IS NULL;

UPDATE "TENA_Admin".users
SET auth_type = 'local'
WHERE (auth_type IS NULL OR auth_type NOT IN ('local', 'oauth')) AND password_hash IS NOT NULL;

UPDATE "TENA_Admin".users
SET password_hash = NULL
WHERE auth_type = 'oauth' AND password_hash IS NOT NULL;

UPDATE "TENA_Admin".users
SET auth_type = 'oauth'
WHERE auth_type = 'local' AND password_hash IS NULL;

ALTER TABLE "TENA_Admin".users
    ALTER COLUMN role SET DEFAULT 'pending';

ALTER TABLE "TENA_Admin".users
    DROP CONSTRAINT IF EXISTS users_role_check;

ALTER TABLE "TENA_Admin".users
    ADD CONSTRAINT users_role_check
    CHECK (role IN ('pending', 'user', 'admin', 'denied'));

ALTER TABLE "TENA_Admin".users
    DROP CONSTRAINT IF EXISTS users_auth_type_check;

ALTER TABLE "TENA_Admin".users
    ADD CONSTRAINT users_auth_type_check
    CHECK (auth_type IN ('local', 'oauth'));

ALTER TABLE "TENA_Admin".users
    DROP CONSTRAINT IF EXISTS users_check;

ALTER TABLE "TENA_Admin".users
    ADD CONSTRAINT users_check
    CHECK (
        (auth_type = 'local' AND password_hash IS NOT NULL)
        OR
        (auth_type = 'oauth' AND password_hash IS NULL)
    );

CREATE UNIQUE INDEX IF NOT EXISTS users_email_lower_uidx
    ON "TENA_Admin".users (LOWER(email));
