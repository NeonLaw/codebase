--! Previous: sha1:906f4fc2c2cb9f069badd3e10c1801455689fbb9
--! Hash: sha1:15fcabc98be84f5605371cf8217cb8f1f67374b5

-- Enter migration here

ALTER TABLE matter_template ADD COLUMN IF NOT EXISTS category VARCHAR(32) DEFAULT 'litigation' NOT NULL;
