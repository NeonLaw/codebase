--! Previous: sha1:e7cdd812fd061acfb947f7678c4d523f75a5541c
--! Hash: sha1:69bb449db447024981bfd6e9f0e5151189c0e614

-- Enter migration here

-- Add with check for update statements
DROP POLICY IF EXISTS portal_update_person ON person;
CREATE POLICY portal_update_person ON person FOR UPDATE TO portal
USING (id = nullif(current_setting('person.id', true), '')::uuid)
WITH CHECK (id = nullif(current_setting('person.id', true), '')::uuid);

DROP POLICY IF EXISTS lawyer_update_person ON person;
CREATE POLICY lawyer_update_person ON person FOR UPDATE TO lawyer
USING (id = nullif(current_setting('person.id', true), '')::uuid)
WITH CHECK (id = nullif(current_setting('person.id', true), '')::uuid);

GRANT SELECT, UPDATE ON person TO portal;
GRANT SELECT, UPDATE ON person TO lawyer;
GRANT ALL ON person TO admin;
