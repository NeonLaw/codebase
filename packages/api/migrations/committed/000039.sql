--! Previous: sha1:4c1fbcaeca0bd5050f42bacfdd38274abe5c11c5
--! Hash: sha1:d940bf8386c2f8db2629188e8664191f97af06b2

-- Enter migration here

ALTER TABLE matter DROP COLUMN IF EXISTS folder_name;

ALTER TABLE response ADD COLUMN IF NOT EXISTS upload_id UUID;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'response_upload_id_fkey') THEN
ALTER TABLE response ADD CONSTRAINT response_upload_id_fkey
FOREIGN KEY (upload_id) REFERENCES upload(id);

END IF;

END;
$$;

ALTER TABLE address ADD COLUMN IF NOT EXISTS lob_record JSON NOT NULL;

ALTER TABLE letter ADD COLUMN IF NOT EXISTS lob_record JSON NOT NULL;
