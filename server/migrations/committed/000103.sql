--! Previous: sha1:7bbe0ad9e652da887b56bc0d2c674f21729a10de
--! Hash: sha1:d996887bceb95cb626f0c1166bd3fe92926dfb18

-- Enter migration here

ALTER TABLE matter_contact DROP CONSTRAINT IF EXISTS matter_contact_role;

ALTER TABLE matter_contact ADD CONSTRAINT matter_contact_role CHECK (
  role IN (
    'read_only_client',
    'client',
    'billing',
    'lawyer',
    'clerk'
  )
);
