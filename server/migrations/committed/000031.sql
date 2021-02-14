--! Previous: sha1:10137701963233a6206edd35b8ace01120f7865a
--! Hash: sha1:08732a77a9e6fac7be6215cea337a2e40924664f

-- Enter migration here

ALTER TABLE flashcard DROP COLUMN IF EXISTS topic;
