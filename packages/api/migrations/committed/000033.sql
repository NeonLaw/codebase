--! Previous: sha1:b31126ed209e700af99b005df8704c6c70e5ad0d
--! Hash: sha1:6a751bf1a1cb96df7a645bc35011cbe0275532f3

-- Enter migration here

CREATE TABLE IF NOT EXISTS letter_template(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));


SELECT create_primary_key_id_if_not_exists('letter_template');

ALTER TABLE letter_template ADD COLUMN IF NOT EXISTS name VARCHAR NOT NULL;

ALTER TABLE letter_template ADD COLUMN IF NOT EXISTS css VARCHAR NOT NULL;

CREATE TABLE IF NOT EXISTS letter(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));


SELECT create_primary_key_id_if_not_exists('letter');

ALTER TABLE letter ADD COLUMN IF NOT EXISTS letter_template_id UUID NOT NULL;

ALTER TABLE letter ADD COLUMN IF NOT EXISTS mdx VARCHAR NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'letter_letter_template_id_fkey') THEN
ALTER TABLE letter ADD CONSTRAINT letter_letter_template_id_fkey
FOREIGN KEY (letter_template_id) REFERENCES letter_template(id);

END IF;

END;
$$;

ALTER TABLE letter ADD COLUMN IF NOT EXISTS addressor_id UUID NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'letter_addressor_id_fkey') THEN
ALTER TABLE letter ADD CONSTRAINT letter_addressor_id_fkey
FOREIGN KEY (addressor_id) REFERENCES person(id);

END IF;

END;
$$;

ALTER TABLE letter ADD COLUMN IF NOT EXISTS addressee_id UUID NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'letter_addressee_id_fkey') THEN
ALTER TABLE letter ADD CONSTRAINT letter_addressee_id_fkey
FOREIGN KEY (addressee_id) REFERENCES person(id);

END IF;

END;
$$;
