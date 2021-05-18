--! Previous: sha1:0bf5eba2ef441a91b42d9aa885674b86cb263f96
--! Hash: sha1:c6eea275155707965c2f7428bd72c4e082f509ed

-- Enter migration here

DROP POLICY IF EXISTS admin_update_matters ON matters;
DROP POLICY IF EXISTS admin_select_matter ON matters;
DROP POLICY IF EXISTS admin_insert_matter ON matters;

CREATE POLICY admin_modify_matters ON matters TO admin USING (true) WITH CHECK (true);

GRANT ALL ON matters TO admin;
