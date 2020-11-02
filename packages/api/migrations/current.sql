-- Enter migration here

CREATE TABLE IF NOT EXISTS address(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                  PRIMARY KEY (id));

ALTER TABLE address ADD COLUMN IF NOT EXISTS role varchar NOT NULL DEFAULT 'route';

ALTER TABLE address ADD COLUMN IF NOT EXISTS role varchar NOT NULL DEFAULT 'street_number';

ALTER TABLE address ADD COLUMN IF NOT EXISTS role varchar NOT NULL DEFAULT 'locality';

ALTER TABLE address ADD COLUMN IF NOT EXISTS role varchar NOT NULL DEFAULT 'administrative_area_level_1';

ALTER TABLE address ADD COLUMN IF NOT EXISTS role varchar NOT NULL DEFAULT 'postal_code';

ALTER TABLE address ADD COLUMN IF NOT EXISTS role varchar NOT NULL DEFAULT 'country';

ALTER TABLE address ADD COLUMN IF NOT EXISTS person_id uuid NOT NULL;

ALTER TABLE address ADD COLUMN IF NOT EXISTS lob_identifier varchar NOT NULL;

DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'address_person_id_fkey') THEN
ALTER TABLE address ADD CONSTRAINT address_person_id_fkey
FOREIGN KEY (person_id) REFERENCES person(id);

END IF;

END;
$$;
