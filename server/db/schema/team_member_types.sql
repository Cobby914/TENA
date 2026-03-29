SET search_path TO "TENA_Admin";

CREATE TABLE IF NOT EXISTS team_member_types (
    id              SERIAL PRIMARY KEY,
    team_member_id  INT NOT NULL REFERENCES team_members(id) ON DELETE CASCADE,
    member_type_id  INT NOT NULL REFERENCES member_types(id) ON DELETE CASCADE,
    UNIQUE (team_member_id, member_type_id)
);

