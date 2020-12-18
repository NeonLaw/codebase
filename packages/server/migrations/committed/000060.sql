--! Previous: sha1:27fa3b47e936ae24b05a15acb159e3c35c629170
--! Hash: sha1:24c0d2f5f91d77accb2708569fec7d145147d76e

-- Enter migration here

CREATE POLICY admin_delete_matter ON matter FOR DELETE TO admin USING (true);
