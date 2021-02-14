--! Previous: sha1:5ea0a7b1e4d0e732633fccca18677afc414c01c4
--! Hash: sha1:eb16b32c3861cf8599c88fdd5ae8650d58f49c53

-- Enter migration here


ALTER TABLE matter_template ADD COLUMN IF NOT EXISTS active boolean DEFAULT true NOT NULL;
CREATE INDEX IF NOT EXISTS matter_template_active ON matter_template (active);
