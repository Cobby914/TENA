CREATE TABLE IF NOT EXISTS "TENA_Admin".oauth_accounts (
    user_id     INT PRIMARY KEY,
    provider    VARCHAR(50) NOT NULL,
    provider_id VARCHAR(255) NOT NULL UNIQUE,

    FOREIGN KEY (user_id)
        REFERENCES "TENA_Admin".users(id)
        ON DELETE CASCADE
);