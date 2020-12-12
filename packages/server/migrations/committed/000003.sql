--! Previous: sha1:b4637d729488ecf9d7a758adaad34fc28b4cd161
--! Hash: sha1:03ecd1c6aebfa9c7b5194f182878db6ccd7b9723

-- Enter migration here
-- Create the Primary Key ID if it does not exist

CREATE OR REPLACE FUNCTION create_primary_key_id_if_not_exists (t_name text) returns void AS $$
BEGIN
    IF NOT EXISTS (SELECT constraint_name
                   FROM information_schema.table_constraints
                   WHERE table_name = t_name AND constraint_type = 'PRIMARY KEY') THEN
        ALTER TABLE t_name ADD PRIMARY KEY (id);
    END IF;
END;
$$ LANGUAGE 'plpgsql';

-- This function updates the updated_at column to the current_timestamp when a record is saved.

CREATE OR REPLACE FUNCTION set_updated_at() RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TABLE IF NOT EXISTS person(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));

-- The ID column is a non-nullable UUID

ALTER TABLE person ADD COLUMN IF NOT EXISTS id uuid DEFAULT uuid_generate_v4();


SELECT create_primary_key_id_if_not_exists('person');


ALTER TABLE person
ALTER COLUMN id
SET NOT NULL;

-- The name column is a nullable varchar

ALTER TABLE person ADD COLUMN IF NOT EXISTS name VARCHAR;


ALTER TABLE person ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT CURRENT_TIMESTAMP;


ALTER TABLE person ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT CURRENT_TIMESTAMP;


DROP TRIGGER IF EXISTS set_updated_at_on_person ON public.person;

-- This trigger updates the updated_at column when a person is saved.

CREATE TRIGGER set_updated_at_on_person
BEFORE
UPDATE ON person
FOR EACH ROW EXECUTE PROCEDURE set_updated_at();
