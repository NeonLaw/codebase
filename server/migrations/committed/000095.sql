--! Previous: sha1:f33c6d0983c5733033d435f826b79219e37f255c
--! Hash: sha1:c6223fc3376405cab844e097fe8a5726f160157d

-- Enter migration here

ALTER TABLE document_template ADD COLUMN IF NOT EXISTS description text NOT NULL;
