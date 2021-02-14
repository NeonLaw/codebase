--! Previous: sha1:afb700880cd56270d6c4c326bd11d52f1db2f682
--! Hash: sha1:ba75b6874ca490feb005b92e2b33256746220cb3

-- Enter migration here

ALTER TABLE document DROP CONSTRAINT IF EXISTS document_file_extension_check;
ALTER TABLE document DROP COLUMN IF EXISTS file_extension;

ALTER TABLE document_template ADD COLUMN IF NOT EXISTS file_extension VARCHAR(16) DEFAULT 'pdf' NOT NULL;
ALTER TABLE document_template DROP CONSTRAINT IF EXISTS document_template_file_extension_check;
ALTER TABLE document_template ADD CONSTRAINT document_template_file_extension_check CHECK (
  file_extension IN (
    'docx',
    'jpg',
    'mdx',
    'pdf',
    'png',
    'txt'
  )
);

ALTER TABLE document_template RENAME COLUMN javascript_module TO description;

ALTER TABLE document_template ADD COLUMN IF NOT EXISTS read_authorization VARCHAR(16) DEFAULT 'admin' NOT NULL;
ALTER TABLE document_template ADD COLUMN IF NOT EXISTS create_authorization VARCHAR(16) DEFAULT 'admin' NOT NULL;
ALTER TABLE document_template ADD COLUMN IF NOT EXISTS update_authorization VARCHAR(16) DEFAULT 'admin' NOT NULL;
ALTER TABLE document_template ADD COLUMN IF NOT EXISTS delete_authorization VARCHAR(16) DEFAULT 'admin' NOT NULL;
