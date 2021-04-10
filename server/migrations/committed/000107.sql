--! Previous: sha1:fbff9a20fd13470e02c85c1fb79fc5099a5c27b2
--! Hash: sha1:c43d921c6dcb1a7a49288ecd4afb222f00fa9fb7

-- Enter migration here

CREATE OR REPLACE VIEW current_user_documents AS (
  SELECT d.id as id FROM document d
  INNER JOIN matter_document md ON (md.document_id = d.id)
  INNER JOIN matter m ON (md.matter_id = m.id)
  INNER JOIN person p ON (m.primary_contact_id = p.id)
  WHERE p.id = (nullif(current_setting('person.id', true), '')::uuid)
);

GRANT SELECT ON current_user_documents TO portal;
GRANT SELECT ON current_user_documents TO lawyer;
GRANT SELECT ON current_user_documents TO admin;

ALTER TABLE document ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS portal_select_document ON document;
CREATE POLICY portal_select_document ON document FOR SELECT TO portal
USING (id IN (SELECT * FROM current_user_documents));

GRANT SELECT ON document TO portal;

DROP POLICY IF EXISTS admin_select_document ON document;
CREATE POLICY admin_select_document ON document FOR SELECT TO admin USING (true);

GRANT ALL ON document TO admin;
