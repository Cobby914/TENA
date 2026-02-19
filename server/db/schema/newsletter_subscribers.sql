SET search_path TO "TENA_Admin";

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    email           VARCHAR(255) PRIMARY KEY,
    first_name      VARCHAR(100),
    last_name       VARCHAR(100),
    subscribed_at   TIMESTAMP DEFAULT NOW()
);
