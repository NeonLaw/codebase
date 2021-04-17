--! Previous: sha1:bd4735e7e5925a0893d000663d86dbeef279dfa2
--! Hash: sha1:a58cf84907c1851854963211d5a7f5a3d190b18b

-- Enter migration here

DROP FUNCTION IF EXISTS create_unprocessed_matter_document;

CREATE TABLE IF NOT EXISTS unprocessed_document(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                  PRIMARY KEY (id));

ALTER TABLE unprocessed_document ADD COLUMN IF NOT EXISTS filename text NOT NULL;
ALTER TABLE unprocessed_document ADD COLUMN IF NOT EXISTS documentable_type varchar(255) NOT NULL;
ALTER TABLE unprocessed_document ADD COLUMN IF NOT EXISTS documentable_id uuid NOT NULL;
ALTER TABLE unprocessed_document ADD COLUMN IF NOT EXISTS document_template_id uuid NOT NULL;

ALTER TABLE unprocessed_document ADD COLUMN IF NOT EXISTS processed_document_id uuid;

DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'unprocessed_document_document_template_id_fkey') THEN
ALTER TABLE unprocessed_document ADD CONSTRAINT unprocessed_document_document_template_id_fkey
FOREIGN KEY (document_template_id) REFERENCES document_template(id);

END IF;

END;
$$;

DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'unprocessed_document_processed_document_id_fkey') THEN
ALTER TABLE unprocessed_document ADD CONSTRAINT unprocessed_document_processed_document_id_fkey
FOREIGN KEY (processed_document_id) REFERENCES document(id);

END IF;

END;
$$;

GRANT ALL ON unprocessed_document TO admin;
