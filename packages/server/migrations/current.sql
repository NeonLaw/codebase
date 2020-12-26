-- Enter migration here

ALTER TABLE matter_contact ADD COLUMN IF NOT EXISTS role varchar NOT NULL;

CREATE OR REPLACE VIEW current_user_matters
  AS
    SELECT matter.*
    FROM public.matter matter
    INNER JOIN public.matter_contact AS matter_contacts
    ON matter_contacts.matter_id = matter.id
    WHERE matter.primary_contact_id = nullif(current_setting('person.id', true), '')::uuid
    OR matter_contacts.contact_id = nullif(current_setting('person.id', true), '')::uuid
