--! Previous: sha1:03ecd1c6aebfa9c7b5194f182878db6ccd7b9723
--! Hash: sha1:5110d51f79ab3ab18b3a076e8f09a212a6b6e768

-- Enter migration here
-- Set created_at column as not null

ALTER TABLE person
ALTER COLUMN created_at
SET NOT NULL;

-- Set updated_at column as not null

ALTER TABLE person
ALTER COLUMN updated_at
SET NOT NULL;
