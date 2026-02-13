CREATE TABLE IF NOT EXISTS "TENA_Admin".company_info (
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(255) NOT NULL,
    email       VARCHAR(255),
    phone       VARCHAR(50),
    address     VARCHAR(255),
    city        VARCHAR(100),
    state       VARCHAR(100),
    zip         VARCHAR(20),
    created_at  TIMESTAMP DEFAULT NOW()
);
