--! Previous: sha1:58ed65415e9a792211136d4caae9c468a2894e8d
--! Hash: sha1:b2647d7f745b79a3df8b2d068480071a11ea9658

-- Enter migration here

ALTER TABLE person DROP COLUMN IF EXISTS flags;

ALTER TABLE person ADD COLUMN flags text DEFAULT ''
NOT NULL CHECK (length(flags) < 2000 AND flags ~ '^[A-Z_\-,]*$');
