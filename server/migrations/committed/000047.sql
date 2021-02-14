--! Previous: sha1:4079e2d9657c1c5a9fd16b03c5f9900562b2ce2f
--! Hash: sha1:d415cc5d181cdeb3c8d95d8245455d63bf32ff78

-- Enter migration here

ALTER TABLE address RENAME COLUMN locality TO city;
ALTER TABLE address RENAME COLUMN administrative_area_level_1 TO state;
