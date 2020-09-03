--! Previous: sha1:1e714cd51906e64a1151083166eda7f5c3074468
--! Hash: sha1:6bf34607a219aeb064b2d95463c745cb969a0de8

-- Enter migration here

ALTER TABLE matter ADD COLUMN IF NOT EXISTS folder_name citext;

CREATE UNIQUE INDEX IF NOT EXISTS unique_matter_folder_name ON matter (folder_name);

DO $$
DECLARE
  temprow record;
BEGIN
  FOR temprow IN
    SELECT id FROM matter
  LOOP
    UPDATE matter SET folder_name = temprow.id WHERE id = temprow.id;
  END LOOP;
END;
$$;

ALTER TABLE matter ALTER COLUMN folder_name SET NOT NULL;

ALTER TABLE matter ADD COLUMN IF NOT EXISTS primary_contact_id uuid;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'matter_primary_contact_id_fkey') THEN
ALTER TABLE matter ADD CONSTRAINT matter_primary_contact_id_fkey
FOREIGN KEY (primary_contact_id) REFERENCES person(id);

END IF;

END;
$$;
