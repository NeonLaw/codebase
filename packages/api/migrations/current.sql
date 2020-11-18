-- Enter migration here

ALTER TABLE person DROP COLUMN IF EXISTS flags;
ALTER TABLE person ADD COLUMN flags text DEFAULT '' NOT NULL CHECK (length(flags) < 2000 AND flags ~'[A-Z_-,]*');

GRANT UPDATE (flags) ON person TO portal;
