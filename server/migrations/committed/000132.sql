--! Previous: sha1:d1bac625eeddc1d7e8eb1d43c05578bed5b7981c
--! Hash: sha1:49f7b7387d63e381b4a308cca433255cfa0f6ee7

-- Enter migration here


ALTER TABLE matters DROP CONSTRAINT IF EXISTS matter_primary_contact_id_fkey;
ALTER TABLE matters DROP CONSTRAINT IF EXISTS matters_primary_contact_id_fkey;

ALTER TABLE matters ADD CONSTRAINT matter_primary_contact_id_fkey FOREIGN KEY (primary_contact_id) REFERENCES people(id) ON DELETE cascade;
