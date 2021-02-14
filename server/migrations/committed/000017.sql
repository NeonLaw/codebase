--! Previous: sha1:570ebf7de7a0747938a66fd331073c2369928571
--! Hash: sha1:8b129781288c8cf3c64f167243ce42ed4cab9bc8

-- Enter migration here

CREATE TABLE IF NOT EXISTS question(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));

SELECT create_primary_key_id_if_not_exists('question');

ALTER TABLE question ADD COLUMN IF NOT EXISTS prompt VARCHAR NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS question_prompts ON question (prompt);

ALTER TABLE question ADD COLUMN IF NOT EXISTS question_type VARCHAR NOT NULL;

ALTER TABLE question DROP CONSTRAINT IF EXISTS question_question_type_check;
ALTER TABLE question ADD CONSTRAINT question_question_type_check CHECK (
  question_type IN (
    'single-select',
    'multiple-select',
    'creatable-select',
    'single-line-text',
    'multi-line-text',
    'number',
    'date',
    'datetime',
    'file-upload'
  )
);

ALTER TABLE question ADD COLUMN IF NOT EXISTS options VARCHAR ARRAY;

COMMENT ON COLUMN public.question.id IS '@omit create,insert,update\nThe unique ID of a question';
COMMENT ON COLUMN public.question.question_type IS 'The question_type designates if a question is a multiple-choice, text, number, file-upload, or date/time question.';
COMMENT ON COLUMN public.question.prompt IS 'The prompt is what the question is asking for.';
COMMENT ON COLUMN public.question.options IS 'An optional column containing options to answer a question.';

GRANT SELECT ON flashcard TO anonymous;
GRANT SELECT ON flashcard TO portal;
GRANT SELECT ON flashcard TO lawyer;
GRANT ALL ON flashcard TO admin;
