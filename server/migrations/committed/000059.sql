--! Previous: sha1:15fcabc98be84f5605371cf8217cb8f1f67374b5
--! Hash: sha1:27fa3b47e936ae24b05a15acb159e3c35c629170

-- Enter migration here

DO $$
BEGIN
  CREATE ROLE neon_law_admin WITH NOLOGIN;
  EXCEPTION WHEN DUPLICATE_OBJECT THEN
  RAISE NOTICE 'not creating role neon_law_admin -- it already exists';
END
$$;

GRANT anonymous TO neon_law_admin;

GRANT portal TO neon_law_admin;

GRANT lawyer TO neon_law_admin;

GRANT admin TO neon_law_admin;

DROP TABLE IF EXISTS sync;
