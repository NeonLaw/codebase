--! Previous: sha1:d77754facf8a367b9e34eb82b9f8644f609a12ed
--! Hash: sha1:5ea0a7b1e4d0e732633fccca18677afc414c01c4

-- Enter migration here

CREATE INDEX IF NOT EXISTS matter_template_categories ON matter_template (category);
