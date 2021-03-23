-- Enter migration here

CREATE SCHEMA IF NOT EXISTS lob;
CREATE TABLE IF NOT EXISTS lob.address(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));

ALTER TABLE lob.address ADD COLUMN IF NOT EXISTS lob_identifier TEXT NOT NULL;
CREATE UNIQUE INDEX IF NOT EXISTS unique_address_lob_identifier ON lob.address (lob_identifier);

ALTER TABLE lob.address ADD COLUMN IF NOT EXISTS name TEXT;
ALTER TABLE lob.address ADD COLUMN IF NOT EXISTS description TEXT;

ALTER TABLE lob.address ADD COLUMN IF NOT EXISTS route TEXT;
ALTER TABLE lob.address ADD COLUMN IF NOT EXISTS city TEXT;
ALTER TABLE lob.address ADD COLUMN IF NOT EXISTS country TEXT;
ALTER TABLE lob.address ADD COLUMN IF NOT EXISTS zip TEXT;
ALTER TABLE lob.address ADD COLUMN IF NOT EXISTS state TEXT;
ALTER TABLE lob.address ADD COLUMN IF NOT EXISTS created_at timestamptz;
ALTER TABLE lob.address ADD COLUMN IF NOT EXISTS updated_at timestamptz;

CREATE TABLE IF NOT EXISTS lob.letter(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));

ALTER TABLE lob.letter ADD COLUMN IF NOT EXISTS lob_identifier TEXT NOT NULL;
CREATE UNIQUE INDEX IF NOT EXISTS unique_letter_lob_identifier ON lob.letter (lob_identifier);

ALTER TABLE lob.letter ADD COLUMN IF NOT EXISTS description TEXT;
ALTER TABLE lob.letter ADD COLUMN IF NOT EXISTS created_at timestamptz;
ALTER TABLE lob.letter ADD COLUMN IF NOT EXISTS updated_at timestamptz;
ALTER TABLE lob.letter ADD COLUMN IF NOT EXISTS url TEXT;
ALTER TABLE lob.letter ADD COLUMN IF NOT EXISTS address_placement TEXT;
ALTER TABLE lob.letter ADD COLUMN IF NOT EXISTS color BOOLEAN;
ALTER TABLE lob.letter ADD COLUMN IF NOT EXISTS double_sided BOOLEAN;

ALTER TABLE lob.letter ADD COLUMN IF NOT EXISTS from_address_identifier TEXT;

DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'lob_letter_from_address_fkey') THEN
ALTER TABLE lob.letter ADD CONSTRAINT lob_letter_from_address_fkey
FOREIGN KEY (from_address_identifier) REFERENCES lob.address(lob_identifier);

END IF;

END;
$$;

ALTER TABLE lob.letter ADD COLUMN IF NOT EXISTS to_address_identifier TEXT;

DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'lob_letter_to_address_fkey') THEN
ALTER TABLE lob.letter ADD CONSTRAINT lob_letter_to_address_fkey
FOREIGN KEY (to_address_identifier) REFERENCES lob.address(lob_identifier);

END IF;

END;
$$;
