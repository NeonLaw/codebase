-- Enter migration here

CREATE POLICY admin_delete_matter ON matter FOR DELETE TO admin USING (true);
