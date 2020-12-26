--! Previous: sha1:4e104c7c36adee13b6fe4ded20f0a352c5de1d21
--! Hash: sha1:8fd0fc431bb746ff3d4c03cfb0f6618d084f16ed

-- Enter migration here

ALTER TABLE matter_contact ADD COLUMN IF NOT EXISTS role varchar NOT NULL;

CREATE OR REPLACE VIEW current_user_matters
  AS
    SELECT matter.*, matter_template.name as matter_template_name, matter_template.category as matter_template_category
    FROM public.matter matter
    LEFT JOIN public.matter_contact AS matter_contacts
    ON matter_contacts.matter_id = matter.id
    LEFT JOIN public.matter_template AS matter_template
    ON matter_template.id = matter.matter_template_id
    WHERE matter.primary_contact_id = nullif(current_setting('person.id', true), '')::uuid
    OR matter_contacts.contact_id = nullif(current_setting('person.id', true), '')::uuid;

GRANT SELECT ON current_user_matters TO portal;
GRANT SELECT ON current_user_matters TO lawyer;
GRANT SELECT ON current_user_matters TO admin;
