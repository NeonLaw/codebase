--! Previous: sha1:e9f3fb3ce174f33eaa8e5181c6ef43c5d6eb418d
--! Hash: sha1:9145682fa15d7a5fd017ebb1c2c87792b18e9da8

-- Enter migration here

CREATE UNIQUE INDEX IF NOT EXISTS unique_flashcard_prompt ON flashcard (prompt);
