CREATE TABLE IF NOT EXISTS "TENA_Admin".newsletter_subscribers (
    email           VARCHAR(255) PRIMARY KEY,
    first_name      VARCHAR(100),
    last_name       VARCHAR(100),
    subscribed_at   TIMESTAMP DEFAULT NOW()
);
