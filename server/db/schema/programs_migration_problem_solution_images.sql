-- Safe migration for existing environments
-- Ensures programs table uses problem_image/solution_image and backfills from image_key when present

ALTER TABLE "TENA_Admin".programs
ADD COLUMN IF NOT EXISTS problem_image VARCHAR(255),
ADD COLUMN IF NOT EXISTS solution_image VARCHAR(255);

DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'TENA_Admin'
      AND table_name = 'programs'
      AND column_name = 'image_key'
  ) THEN
    UPDATE "TENA_Admin".programs
    SET
      problem_image = COALESCE(problem_image, image_key),
      solution_image = COALESCE(solution_image, image_key)
    WHERE image_key IS NOT NULL;
  END IF;
END $$;
