--! Previous: sha1:aef1ba8e8d8a8f01fd70ab5567a6864da1571002
--! Hash: sha1:221ad9debf4a33bc256c53a7228884fd05ae6021

-- Enter migration here

ALTER TABLE letter_template DROP COLUMN css;

ALTER TABLE letter_template ADD COLUMN IF NOT EXISTS javascript_module varchar NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS unique_letter_template_javascript_module ON letter_template (javascript_module);
