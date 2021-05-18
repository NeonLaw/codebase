--! Previous: sha1:96e2f61ad0c4cfd9fcfd99cd84068e2fa30b587e
--! Hash: sha1:0bf5eba2ef441a91b42d9aa885674b86cb263f96

-- Enter migration here

DROP POLICY IF EXISTS admin_update_matters ON matters;
CREATE POLICY admin_update_matters ON matters FOR UPDATE TO admin WITH CHECK (true);
