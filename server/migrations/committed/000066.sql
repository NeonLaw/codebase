--! Previous: sha1:809bff8ee22fb744fdfe3a8ab9450a4642eccd6e
--! Hash: sha1:813b59a1042a146df68f0f92d48adaae0c5d7855

-- Enter migration here

ALTER TABLE document DROP CONSTRAINT IF EXISTS document_documentable_table_name_check;
ALTER TABLE document ADD CONSTRAINT document_documentable_table_name_check CHECK (
  documentable_table_name IN (
    'response_document',
    'matter_document'
  )
);

ALTER TABLE letter DROP COLUMN IF EXISTS document_id;
ALTER TABLE letter ADD COLUMN IF NOT EXISTS body TEXT NOT NULL;

ALTER TABLE letter ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE document_template DROP COLUMN IF EXISTS read_authorization;
ALTER TABLE document_template DROP COLUMN IF EXISTS create_authorization;
ALTER TABLE document_template DROP COLUMN IF EXISTS update_authorization;
ALTER TABLE document_template DROP COLUMN IF EXISTS delete_authorization;
ALTER TABLE document_template DROP COLUMN IF EXISTS file_extension;

DROP TABLE IF EXISTS flashcard;

ALTER TABLE address DROP COLUMN IF EXISTS lob_record;
ALTER TABLE letter DROP COLUMN IF EXISTS lob_record;

ALTER TABLE question DROP CONSTRAINT IF EXISTS question_question_type_check;
ALTER TABLE question ADD CONSTRAINT question_question_type_check CHECK (
  question_type IN (
    'single-choice',
    'single-date',
    'single-file-upload',
    'single-line-text',
    'text',
    'date-range',
    'number',
    'multiple-file-upload'
  )
);

ALTER TABLE question ADD COLUMN IF NOT EXISTS help_text TEXT;

ALTER TABLE matter_template ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE matter_template ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT CURRENT_TIMESTAMP;

DROP TRIGGER IF EXISTS set_updated_at_on_matter_template ON matter_template;

CREATE TRIGGER set_updated_at_on_matter_template
BEFORE
UPDATE ON matter_template
FOR EACH ROW EXECUTE PROCEDURE set_updated_at();

ALTER TABLE response_document DROP COLUMN IF EXISTS author_id;


ALTER TABLE questionnaire ADD COLUMN IF NOT EXISTS matter_template_id uuid NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'questionnaire_matter_template_id_fkey') THEN
ALTER TABLE questionnaire ADD CONSTRAINT questionnaire_matter_template_id_fkey
FOREIGN KEY (matter_template_id) REFERENCES matter_template(id);

END IF;

END;
$$;

ALTER TABLE document_template ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE document_template ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT CURRENT_TIMESTAMP;

DROP TRIGGER IF EXISTS set_updated_at_on_document_template ON document_template;

CREATE TRIGGER set_updated_at_on_document_template
BEFORE
UPDATE ON document_template
FOR EACH ROW EXECUTE PROCEDURE set_updated_at();

DROP TABLE IF EXISTS public_document;
