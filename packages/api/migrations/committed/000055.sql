--! Previous: sha1:00946ba4c85710707a298cec714f0790e169ccc8
--! Hash: sha1:afb700880cd56270d6c4c326bd11d52f1db2f682

-- Enter migration here

CREATE INDEX IF NOT EXISTS matter_created_at_on_matter ON matter (created_at);
CREATE INDEX IF NOT EXISTS matter_updated_at_on_matter ON matter (updated_at);
