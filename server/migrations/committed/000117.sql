--! Previous: sha1:f6b58413b8ffa5019e11fc2243cca1036f4fbca9
--! Hash: sha1:2f80036f8756e0a2b6182cb5547694178597ce73

-- Enter migration here

ALTER TABLE address DROP COLUMN IF EXISTS active;

ALTER TABLE address ADD COLUMN IF NOT EXISTS public BOOLEAN NOT NULL DEFAULT false;
