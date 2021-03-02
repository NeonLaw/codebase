--! Previous: sha1:a4fb5dfa7fc3968ca708d022947eaa46352f39a9
--! Hash: sha1:2c5a5d785d8c905f028396a17559d15e296ac265

-- Enter migration here

ALTER TABLE letter ALTER COLUMN lob_identifier DROP NOT NULL;

ALTER TABLE letter ALTER COLUMN addressee_id SET NOT NULL;
ALTER TABLE letter ALTER COLUMN addressor_id SET NOT NULL;
