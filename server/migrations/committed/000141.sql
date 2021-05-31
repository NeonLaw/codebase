--! Previous: sha1:4f7e0984f12408f072d5eb767b2e3cc5c4f99c47
--! Hash: sha1:f9c4c31f5edb564a21b718410f38ffe0f7729688

-- Enter migration here

CREATE UNIQUE INDEX IF NOT EXISTS unique_questions_slug ON questions (slug);
CREATE UNIQUE INDEX IF NOT EXISTS unique_matters_slug ON matters (slug);

ALTER TABLE matters ALTER COLUMN slug SET NOT NULL;
ALTER TABLE questions ALTER COLUMN slug SET NOT NULL;
