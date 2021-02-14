--! Previous: sha1:7ebd3480a4385beab75d524350fab1c3792c311b
--! Hash: sha1:50c2527955f38fa9320f401cce3bf808a3e29d04

-- Enter migration here

CREATE TABLE IF NOT EXISTS matter(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));

SELECT create_primary_key_id_if_not_exists('matter');

ALTER TABLE matter ADD COLUMN IF NOT EXISTS name VARCHAR NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS matter_names ON matter (name);

COMMENT ON TABLE public.matter IS '@omit all,create,insert,delete\nA legal matter.';

GRANT ALL ON matter TO lawyer;
GRANT ALL ON matter TO admin;
