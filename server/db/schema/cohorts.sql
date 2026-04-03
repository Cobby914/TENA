SET search_path TO "TENA_Admin";

CREATE TABLE IF NOT EXISTS cohorts (
    id SERIAL PRIMARY KEY,

    year INTEGER NOT NULL,              -- e.g. 2024
    term VARCHAR(20) NOT NULL,          -- 'Winter', 'Spring', etc.
    term_order INTEGER NOT NULL,        -- ensures correct ordering

    name VARCHAR(100),                  -- "2024 Winter Cohort"
    profile_picture BOOLEAN NOT NULL DEFAULT FALSE, -- tracks if intern profile picture exists

    created_at TIMESTAMP DEFAULT NOW(),

    -- Prevent duplicate cohorts
    CONSTRAINT unique_cohort UNIQUE (year, term)
);
