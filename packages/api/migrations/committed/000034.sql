--! Previous: sha1:6a751bf1a1cb96df7a645bc35011cbe0275532f3
--! Hash: sha1:aef1ba8e8d8a8f01fd70ab5567a6864da1571002

-- Enter migration here

CREATE INDEX ON "public"."document"("document_code_id");
CREATE INDEX ON "public"."letter"("addressor_id");
CREATE INDEX ON "public"."letter"("addressee_id");
CREATE INDEX ON "public"."letter"("letter_template_id");

CREATE TABLE IF NOT EXISTS address(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                  PRIMARY KEY (id));

ALTER TABLE address ADD COLUMN IF NOT EXISTS route varchar NOT NULL DEFAULT 'route';

ALTER TABLE address ADD COLUMN IF NOT EXISTS street_number varchar NOT NULL DEFAULT 'street_number';

ALTER TABLE address ADD COLUMN IF NOT EXISTS locality varchar NOT NULL DEFAULT 'locality';

ALTER TABLE address ADD COLUMN IF NOT EXISTS administrative_area_level_1 varchar NOT NULL DEFAULT 'administrative_area_level_1';

ALTER TABLE address ADD COLUMN IF NOT EXISTS postal_code varchar NOT NULL DEFAULT 'postal_code';

ALTER TABLE address ADD COLUMN IF NOT EXISTS country varchar NOT NULL DEFAULT 'country';

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

ALTER TABLE letter ADD COLUMN IF NOT EXISTS lob_identifier varchar NOT NULL;
