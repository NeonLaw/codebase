--! Previous: sha1:36079d84b0bd4d4d1d51e94a787c5e3eb08ee72b
--! Hash: sha1:390d812ebd4ef8587ec33b228b3318d58b70af60

-- Enter migration here

DROP POLICY IF EXISTS anonymous_select_address ON address;
CREATE POLICY anonymous_select_address ON address FOR SELECT TO anonymous
USING (public = 'true');
