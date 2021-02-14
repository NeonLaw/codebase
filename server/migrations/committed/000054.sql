--! Previous: sha1:3c492e7e95e4896edf60b796d6019c3296b8359e
--! Hash: sha1:00946ba4c85710707a298cec714f0790e169ccc8

-- Enter migration here

CREATE INDEX IF NOT EXISTS matter_template_id_on_matter ON matter (matter_template_id);
