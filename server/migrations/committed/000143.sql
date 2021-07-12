--! Previous: sha1:61621469c0f9aa7ed76910f197257ab96f84ea80
--! Hash: sha1:6875c68a62516e55e944f7b660859e2e2b9bda4b

-- Enter migration here

DO $$
BEGIN
  CREATE ROLE nick WITH NOLOGIN;
  EXCEPTION WHEN DUPLICATE_OBJECT THEN
  RAISE NOTICE 'not creating role nick -- it already exists';
END
$$;

GRANT anonymous TO nick;

GRANT portal TO nick;

GRANT lawyer TO nick;

GRANT admin TO nick;

DROP TABLE IF EXISTS sync;
