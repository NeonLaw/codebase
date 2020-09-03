--! Previous: sha1:919005705e33f5a22ad70a717f75557443e2dc22
--! Hash: sha1:c26d364a4aef0e2f2f8fe823403367b1f0c61734

-- Enter migration here


COMMENT ON TABLE public.flashcard IS 'A flashcard used for studying';

COMMENT ON COLUMN public.flashcard.created_at IS '@omit create,insert,update,delete\nThe created_at timestamp of the flashcard';

COMMENT ON COLUMN public.flashcard.updated_at IS '@omit create,insert,update,delete\nThe updated_at timestamp of the flashcard';

COMMENT ON COLUMN public.flashcard.topic IS 'The topic of the flashcard. This maps to a topic administered on the California Bar exam.';

COMMENT ON COLUMN public.flashcard.answer IS 'The answer or SideB of the flashcard';

CREATE INDEX IF NOT EXISTS flashcard_topics ON flashcard (topic);
