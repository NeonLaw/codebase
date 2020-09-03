--! Previous: sha1:d7917e9e5cb60250526f55061548c00c32c4f7e6
--! Hash: sha1:9d79330d506da26bed7270cd49814f3994afccec

-- Enter migration here
COMMENT ON TABLE public.person IS '@omit all,create,insert,update,delete\nA person in our system';

COMMENT ON COLUMN public.person.id IS 'The unique ID of a person';

COMMENT ON COLUMN public.person.name IS 'The name of a person';

COMMENT ON COLUMN public.person.name IS 'The email of a person, this must be unique';

-- Instead of a sub column in person, make it its own table.

ALTER TABLE person
DROP COLUMN IF EXISTS subs;


CREATE TABLE IF NOT EXISTS sub(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                  PRIMARY KEY (id));


ALTER TABLE sub ADD COLUMN IF NOT EXISTS identifier varchar(64);


CREATE UNIQUE INDEX IF NOT EXISTS unique_identifier ON sub (identifier);


ALTER TABLE sub ADD COLUMN IF NOT EXISTS person_id uuid NOT NULL;


ALTER TABLE sub ADD COLUMN IF NOT EXISTS connection varchar(64);

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'sub_person_id_fkey') THEN
ALTER TABLE sub ADD CONSTRAINT sub_person_id_fkey
FOREIGN KEY (person_id) REFERENCES person(id);

END IF;

END;
$$;

COMMENT ON TABLE public.sub IS '@omit all,read,create,delete,many,update,delete\nA unique identifier from Auth0';

-- Create a person and a sub record if the sub does not exist

CREATE OR REPLACE PROCEDURE create_person_and_sub(t_identifier varchar, t_email varchar, t_connection varchar, t_role varchar, t_name varchar) LANGUAGE plpgsql AS $$
DECLARE new_person_id uuid;

BEGIN
  INSERT INTO person (email, role, name) VALUES (t_email, t_role, t_name) RETURNING id INTO new_person_id;
  INSERT INTO sub (identifier, connection, person_id) VALUES (t_identifier, t_connection, new_person_id);
  COMMIT;
END;
$$
