--! Previous: sha1:1b1aed9f8753d0758e524dfee1189f8dc778bd6e
--! Hash: sha1:753ee70cf029eb97cd1c2d6fbce14dfc1dc330f2

-- Enter migration here


DROP INDEX IF EXISTS document_documentable_association;

ALTER TABLE document DROP COLUMN IF EXISTS documentable_table_id;
