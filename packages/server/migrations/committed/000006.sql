--! Previous: sha1:8337614f133291bcd7772e7eb8e4d6cf6630476e
--! Hash: sha1:d7917e9e5cb60250526f55061548c00c32c4f7e6

-- Enter migration here

ALTER TABLE person ADD COLUMN IF NOT EXISTS subs text[];


ALTER TABLE person ADD COLUMN IF NOT EXISTS role citext NOT NULL DEFAULT 'portal';


ALTER TABLE person ADD COLUMN IF NOT EXISTS email citext NOT NULL;


CREATE UNIQUE INDEX IF NOT EXISTS unique_person_email ON person (email);
