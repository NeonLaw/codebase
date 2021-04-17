--! Previous: sha1:c43d921c6dcb1a7a49288ecd4afb222f00fa9fb7
--! Hash: sha1:2b5a638b33c5e53511803a473e23c92d808318b7

-- Enter migration here

GRANT SELECT ON document_template TO anonymous;
GRANT SELECT ON document_template TO portal;
GRANT SELECT ON document_template TO lawyer;

CREATE OR REPLACE VIEW current_user_documents AS (
  SELECT d.id as id, md.id as mdid FROM document d
  INNER JOIN matter_document md ON (md.document_id = d.id)
  INNER JOIN matter m ON (md.matter_id = m.id)
  INNER JOIN person p ON (m.primary_contact_id = p.id)
  WHERE p.id = (nullif(current_setting('person.id', true), '')::uuid)
);

DROP POLICY IF EXISTS portal_select_document ON document;
CREATE POLICY portal_select_document ON document FOR SELECT TO portal
USING (id IN (SELECT id FROM current_user_documents));

ALTER TABLE matter_document ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS portal_select_matter_document ON matter_document;
CREATE POLICY portal_select_matter_document ON matter_document FOR SELECT TO portal
USING (id IN (SELECT mdid FROM current_user_documents));

GRANT SELECT ON matter_document TO portal;

DROP POLICY IF EXISTS admin_select_matter_document ON matter_document;
CREATE POLICY admin_select_matter_document ON matter_document FOR SELECT TO admin USING (true);

GRANT ALL ON matter_document TO admin;
