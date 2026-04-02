-- Remove subheader column from programs
ALTER TABLE "TENA_Admin".programs
DROP COLUMN IF EXISTS subheader;
