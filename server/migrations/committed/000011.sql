--! Previous: sha1:69bb449db447024981bfd6e9f0e5151189c0e614
--! Hash: sha1:563f393469895ccd3420bbeb4cdfbf94da064762

-- Enter migration here

REVOKE GRANT OPTION FOR UPDATE ON person FROM portal;
REVOKE GRANT OPTION FOR UPDATE ON person FROM lawyer;

GRANT UPDATE (name, picture) ON person TO portal;
GRANT UPDATE (name, picture) ON person TO lawyer;

REVOKE ALL ON SCHEMA public FROM PUBLIC;
