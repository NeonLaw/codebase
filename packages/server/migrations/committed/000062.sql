--! Previous: sha1:ee44ed66d152200937e4e0ebe0792d3aa4e9abfc
--! Hash: sha1:4e104c7c36adee13b6fe4ded20f0a352c5de1d21

-- Enter migration here

CREATE TABLE IF NOT EXISTS matter_contact(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));

SELECT create_primary_key_id_if_not_exists('matter_contact');

ALTER TABLE matter_contact ADD COLUMN IF NOT EXISTS contact_id uuid NOT NULL;
ALTER TABLE matter_contact ADD COLUMN IF NOT EXISTS matter_id uuid NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'matter_contact_matter_id_fkey') THEN
ALTER TABLE matter_contact ADD CONSTRAINT matter_contact_matter_id_fkey
FOREIGN KEY (matter_id) REFERENCES matter(id);

END IF;

END;
$$;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'matter_contact_contact_id_fkey') THEN
ALTER TABLE matter_contact ADD CONSTRAINT matter_contact_contact_id_fkey
FOREIGN KEY (contact_id) REFERENCES person(id);

END IF;

END;
$$;

ALTER TABLE matter_contact ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;
ALTER TABLE matter_contact ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;


DROP TRIGGER IF EXISTS set_updated_at_on_matter_contact ON public.matter_contact;

-- This trigger updates the updated_at column when a matter_contact is saved.

CREATE TRIGGER set_updated_at_on_matter_contact
BEFORE
UPDATE ON matter_contact
FOR EACH ROW EXECUTE PROCEDURE set_updated_at();
