--! Previous: sha1:50c2527955f38fa9320f401cce3bf808a3e29d04
--! Hash: sha1:1e714cd51906e64a1151083166eda7f5c3074468

-- Enter migration here

ALTER TABLE matter ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;


ALTER TABLE matter ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;


DROP TRIGGER IF EXISTS set_updated_at_on_matter ON public.matter;

-- This trigger updates the updated_at column when a matter is saved.
CREATE TRIGGER set_updated_at_on_matter
BEFORE
UPDATE ON matter
FOR EACH ROW EXECUTE PROCEDURE set_updated_at();
