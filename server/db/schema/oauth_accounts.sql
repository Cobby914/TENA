SET search_path TO "TENA_Admin";

CREATE TABLE IF NOT EXISTS oauth_accounts (
    user_id     INT PRIMARY KEY,
    provider    VARCHAR(50) NOT NULL,
    provider_id VARCHAR(255) NOT NULL UNIQUE,

    FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);
