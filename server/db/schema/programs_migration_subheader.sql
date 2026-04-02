-- Replace legacy link column with subheader for programs
ALTER TABLE "TENA_Admin".programs
ADD COLUMN IF NOT EXISTS subheader VARCHAR(255);

ALTER TABLE "TENA_Admin".programs
DROP COLUMN IF EXISTS link;
