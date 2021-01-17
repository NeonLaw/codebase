--! Previous: sha1:76e4653c56f8f3df86637ca87a9eec157114b0d1
--! Hash: sha1:d77754facf8a367b9e34eb82b9f8644f609a12ed

-- Enter migration here

ALTER TABLE question ALTER COLUMN help_text TYPE json USING help_text::json;

ALTER TABLE matter_template DROP CONSTRAINT IF EXISTS matter_template_category_check;
ALTER TABLE matter_template ADD CONSTRAINT matter_template_category_check CHECK (
  category IN (
    'data-deletion',
    'inmate-letter',
    'litigation',
    'estate',
    'bar-prep',
    'business'
  )
);
