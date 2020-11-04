--! Previous: sha1:ac2533df46189aac4fac8f6386cb958829ba3187
--! Hash: sha1:4c1fbcaeca0bd5050f42bacfdd38274abe5c11c5

-- Enter migration here

ALTER TABLE letter DROP COLUMN IF EXISTS letter_template_id;

ALTER TABLE letter DROP COLUMN IF EXISTS mdx;

ALTER TABLE document ADD COLUMN IF NOT EXISTS file_extension VARCHAR(16) NOT NULL;

ALTER TABLE document DROP CONSTRAINT IF EXISTS document_file_extension_check;
ALTER TABLE document ADD CONSTRAINT document_file_extension_check CHECK (
  file_extension IN (
    'docx',
    'jpg',
    'mdx',
    'pdf',
    'png',
    'txt'
  )
);
