--! Previous: sha1:c26d364a4aef0e2f2f8fe823403367b1f0c61734
--! Hash: sha1:570ebf7de7a0747938a66fd331073c2369928571

-- Enter migration here

CREATE UNIQUE INDEX IF NOT EXISTS flashcard_topic_prompts ON flashcard (topic, prompt);

ALTER TABLE flashcard DROP CONSTRAINT IF EXISTS flashcard_topic_check;
ALTER TABLE flashcard ADD CONSTRAINT flashcard_topic_check CHECK (
  topic IN (
    'business-associations',
    'civil-procedure',
    'community-property',
    'constitutional-law',
    'contracts',
    'crimes',
    'evidence',
    'professional-responsibility',
    'real-property',
    'remedies',
    'torts',
    'wills-and-trusts'
  )
);

COMMENT ON COLUMN public.flashcard.id IS '@omit create,insert,update\nThe unique ID of a flashcard';
