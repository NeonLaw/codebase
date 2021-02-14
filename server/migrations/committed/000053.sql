--! Previous: sha1:2997de76ada7f0bd08f147403be7eea9b1d099c5
--! Hash: sha1:3c492e7e95e4896edf60b796d6019c3296b8359e

-- Enter migration here

ALTER TABLE matter ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS portal_select_matter ON matter;
CREATE POLICY portal_select_matter ON matter FOR SELECT TO portal
USING (primary_contact_id = nullif(current_setting('person.id', true), '')::uuid);

DROP POLICY IF EXISTS portal_insert_matter ON matter;
CREATE POLICY portal_insert_matter ON matter FOR INSERT TO portal
WITH CHECK (primary_contact_id = nullif(current_setting('person.id', true), '')::uuid);

GRANT SELECT, INSERT ON matter to portal;

DROP POLICY IF EXISTS lawyer_select_matter ON matter;
CREATE POLICY lawyer_select_matter ON matter FOR SELECT TO lawyer USING (true);

DROP POLICY IF EXISTS lawyer_insert_matter ON matter;
CREATE POLICY lawyer_insert_matter ON matter FOR INSERT TO lawyer WITH CHECK (true);

GRANT INSERT ON matter TO lawyer;

DROP POLICY IF EXISTS admin_select_matter ON matter;
CREATE POLICY admin_select_matter ON matter FOR SELECT TO admin USING (true);

DROP POLICY IF EXISTS admin_insert_matter ON matter;
CREATE POLICY admin_insert_matter ON matter FOR INSERT TO admin WITH CHECK (true);

GRANT ALL ON matter TO admin;
