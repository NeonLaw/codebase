-- Enter migration here

GRANT anonymous TO neon_law_admin;

GRANT portal TO neon_law_admin;

GRANT lawyer TO neon_law_admin;

GRANT admin TO neon_law_admin;

DROP TABLE IF EXISTS sync;
