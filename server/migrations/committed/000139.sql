--! Previous: sha1:3834ab3e895f3f3341e9adcae9751dd0a4beedf2
--! Hash: sha1:949cf8168d23a02420a0a4daf6411631eba41a1e

-- Enter migration here

DROP POLICY IF EXISTS lawyer_modify_people ON people;
CREATE POLICY lawyer_modify_people ON people TO lawyer USING (true) WITH CHECK (true);
