--! Previous: sha1:7f3a53768f2af4f565aa741d3388a8bad43bd7b8
--! Hash: sha1:3834ab3e895f3f3341e9adcae9751dd0a4beedf2

-- Enter migration here

GRANT SELECT ON matter_contacts to portal;
GRANT SELECT ON matter_contacts to lawyer;

DROP POLICY IF EXISTS lawyer_select_person ON people;
DROP POLICY IF EXISTS lawyer_update_person ON people;

DROP POLICY IF EXISTS lawyer_modify_people ON people;
CREATE POLICY lawyer_modify_people ON people TO admin USING (true) WITH CHECK (true);

GRANT ALL ON people TO lawyer;
