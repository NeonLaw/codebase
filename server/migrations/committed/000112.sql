--! Previous: sha1:2bb658a967c5a722a3eac97f375b7c0975c71324
--! Hash: sha1:37d19d7890e5008584c29350b1fc20f4c6e379b3

-- Enter migration here

DROP POLICY IF EXISTS portal_select_matter ON matter;
DROP POLICY IF EXISTS lawyer_select_matter ON matter;

DROP VIEW IF EXISTS current_user_matters;
CREATE OR REPLACE VIEW current_user_matters
  AS
    SELECT matter.*, matter.id as matter_id, matter_template.name as matter_template_name, matter_template.category as matter_template_category
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

CREATE POLICY portal_select_matter ON matter FOR SELECT TO portal
USING (id IN (SELECT matter_id FROM current_user_matters));

CREATE POLICY lawyer_select_matter ON matter FOR SELECT TO lawyer
USING (id IN (SELECT matter_id FROM current_user_matters));
