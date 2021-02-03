--! Previous: sha1:6b78ad8929c53581dcb379269166e399f45f0fe0
--! Hash: sha1:d9b6e1a8f207bb3ea9458923250546488a6e8348

-- Enter migration here

ALTER TABLE questionnaire ADD COLUMN IF NOT EXISTS question_tree JSON NOT NULL DEFAULT '{}';
