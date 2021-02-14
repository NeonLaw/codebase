--! Previous: sha1:b2647d7f745b79a3df8b2d068480071a11ea9658
--! Hash: sha1:4079e2d9657c1c5a9fd16b03c5f9900562b2ce2f

-- Enter migration here

CREATE TABLE IF NOT EXISTS matter_template(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));

SELECT create_primary_key_id_if_not_exists('matter_template');

ALTER TABLE matter ADD COLUMN IF NOT EXISTS matter_template_id uuid NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'matter_matter_template_id_fkey') THEN
ALTER TABLE matter ADD CONSTRAINT matter_matter_template_id_fkey
FOREIGN KEY (matter_template_id) REFERENCES matter_template(id);

END IF;

END;
$$;

ALTER TABLE matter_template ADD COLUMN IF NOT EXISTS name text NOT NULL;
ALTER TABLE matter_template ADD COLUMN IF NOT EXISTS javascript_module text NOT NULL;
