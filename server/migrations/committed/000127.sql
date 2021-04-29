--! Previous: sha1:4d982e08d273796ef7aab14c015152ec0561521e
--! Hash: sha1:a50c18603f2c2385e6e4190c52a0af6df091e42b

-- Enter migration here

CREATE INDEX IF NOT EXISTS document_filenames ON document (filename);
