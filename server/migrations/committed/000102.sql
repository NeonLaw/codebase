--! Previous: sha1:5135921435cdc407a692b9c950f0020cf48d6a08
--! Hash: sha1:7bbe0ad9e652da887b56bc0d2c674f21729a10de

-- Enter migration here

ALTER TABLE matter_contact DROP CONSTRAINT IF EXISTS matter_contact_role;

ALTER TABLE matter_contact ADD CONSTRAINT matter_contact_role CHECK (
  role IN (
    'read_only'
  )
);

COMMENT ON TABLE public.unprocessed_document IS '@omit all,create,insert\nA uploaded file to be processed';
