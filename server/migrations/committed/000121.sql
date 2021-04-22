--! Previous: sha1:6b4fd1bdc4991ea5808c6d2659f642822d15d0aa
--! Hash: sha1:c6f794e7775a749b67b3805f42377c5f278bb595

-- Enter migration here

CREATE UNIQUE INDEX IF NOT EXISTS unique_public_addresses ON address(public, name);

ALTER TABLE address ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS anonymous_select_address ON address;
CREATE POLICY anonymous_select_address ON address FOR SELECT TO anonymous
USING (id IN (SELECT id FROM address WHERE public = 'true'));

GRANT SELECT ON address TO anonymous;

DROP POLICY IF EXISTS lawyer_select_address ON address;
CREATE POLICY lawyer_select_address ON address FOR SELECT TO lawyer USING (true);

GRANT ALL ON address TO lawyer;

DROP POLICY IF EXISTS admin_select_address ON address;
CREATE POLICY admin_select_address ON address FOR SELECT TO admin USING (true);

GRANT ALL ON address TO admin;
