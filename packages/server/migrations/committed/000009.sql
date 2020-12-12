--! Previous: sha1:5fe02179d1b52c5a59311bb601adc4a5c5fc3aae
--! Hash: sha1:e7cdd812fd061acfb947f7678c4d523f75a5541c

-- Enter migration here

ALTER TABLE person ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS portal_select_person ON person;
CREATE POLICY portal_select_person ON person FOR SELECT TO portal
USING (id = nullif(current_setting('person.id', true), '')::uuid);

DROP POLICY IF EXISTS portal_update_person ON person;
CREATE POLICY portal_update_person ON person FOR UPDATE TO portal
USING (id = nullif(current_setting('person.id', true), '')::uuid);

DROP POLICY IF EXISTS lawyer_select_person ON person;
CREATE POLICY lawyer_select_person ON person FOR SELECT TO lawyer
USING (id = nullif(current_setting('person.id', true), '')::uuid);

DROP POLICY IF EXISTS lawyer_update_person ON person;
CREATE POLICY lawyer_update_person ON person FOR UPDATE TO lawyer
USING (id = nullif(current_setting('person.id', true), '')::uuid);

DROP POLICY IF EXISTS admin_modify_person ON person;
CREATE POLICY admin_modify_person ON person TO admin USING (true) WITH CHECK (true);
