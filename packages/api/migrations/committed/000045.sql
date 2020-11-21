--! Previous: sha1:58ed65415e9a792211136d4caae9c468a2894e8d
--! Hash: sha1:b80a287a1fb39f9cf14c5b4c5f81c942cbbf02e6

-- Enter migration here

ALTER TABLE person DROP COLUMN IF EXISTS flags;
ALTER TABLE person ADD COLUMN flags text DEFAULT '' NOT NULL CHECK (length(flags) < 2000 AND flags ~'[A-Z_-,]*');

GRANT UPDATE (flags) ON person TO portal;
