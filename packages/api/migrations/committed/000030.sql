--! Previous: sha1:9145682fa15d7a5fd017ebb1c2c87792b18e9da8
--! Hash: sha1:10137701963233a6206edd35b8ace01120f7865a

-- Enter migration here

CREATE INDEX IF NOT EXISTS matter_primary_contacts ON matter (primary_contact_id);
