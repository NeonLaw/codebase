--! Previous: sha1:61ec52fbe5d5cc65ad3f82991f4e4720f6dbb93e
--! Hash: sha1:919005705e33f5a22ad70a717f75557443e2dc22

-- Enter migration here

CREATE TABLE IF NOT EXISTS flashcard(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));


ALTER TABLE flashcard ADD COLUMN IF NOT EXISTS id uuid DEFAULT uuid_generate_v4();


SELECT create_primary_key_id_if_not_exists('flashcard');

ALTER TABLE flashcard ADD COLUMN IF NOT EXISTS prompt VARCHAR NOT NULL;

ALTER TABLE flashcard ADD COLUMN IF NOT EXISTS answer VARCHAR NOT NULL;

ALTER TABLE flashcard ADD COLUMN IF NOT EXISTS topic VARCHAR NOT NULL;


ALTER TABLE flashcard ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;


ALTER TABLE flashcard ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;


DROP TRIGGER IF EXISTS set_updated_at_on_flashcard ON public.flashcard;

CREATE TRIGGER set_updated_at_on_flashcard
BEFORE
UPDATE ON flashcard
FOR EACH ROW EXECUTE PROCEDURE set_updated_at();


COMMENT ON TABLE public.flashcard IS '@omit all,create,insert,update,delete\nA flashcard used for studying';

COMMENT ON COLUMN public.flashcard.id IS 'The unique ID of a flashcard';

COMMENT ON COLUMN public.flashcard.prompt IS 'The prompt or sideA of a flashcard';

COMMENT ON COLUMN public.flashcard.answer IS 'The answer of the flashcard';

GRANT SELECT ON flashcard TO anonymous;
GRANT SELECT ON flashcard TO portal;
GRANT SELECT ON flashcard TO lawyer;
GRANT ALL ON flashcard TO admin;
