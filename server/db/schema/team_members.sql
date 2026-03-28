SET search_path TO "TENA_Admin";

CREATE TABLE IF NOT EXISTS team_members (
    id SERIAL PRIMARY KEY,

    first_name VARCHAR(100) NOT NULL,
    last_name  VARCHAR(100) NOT NULL,

    role VARCHAR(150) NOT NULL,                 -- UI title
    member_type member_type_enum NOT NULL,      -- 'board' or 'cohort_member'

    bio TEXT,
    profile_image_key VARCHAR(255),

    display_order INTEGER,

    cohort_id INTEGER REFERENCES cohorts(id) ON DELETE SET NULL,

    linkedin_link VARCHAR(255),

    created_at TIMESTAMP DEFAULT NOW(),

    CONSTRAINT valid_member_type_cohort CHECK (
        (member_type = 'board' AND cohort_id IS NULL)
        OR
        (member_type = 'cohort_member' AND cohort_id IS NOT NULL)
    )
);