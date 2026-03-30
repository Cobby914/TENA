SET search_path TO "TENA_Admin";

-- Roles (board, intern, team, etc.) live in member_types + team_member_types.
-- cohort_id references cohorts; only members who have the "intern" member type
-- should have cohort_id set (enforced in application logic).

CREATE TABLE IF NOT EXISTS team_members (
    id SERIAL PRIMARY KEY,

    first_name VARCHAR(100) NOT NULL,
    last_name  VARCHAR(100) NOT NULL,

    role VARCHAR(150),
    bio TEXT,
    profile_image_key VARCHAR(255),

    display_order INTEGER,

    cohort_id INTEGER REFERENCES cohorts(id) ON DELETE SET NULL,

    linkedin_link VARCHAR(255),

    created_at TIMESTAMP DEFAULT NOW()
);
