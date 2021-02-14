--! Previous: sha1:d415cc5d181cdeb3c8d95d8245455d63bf32ff78
--! Hash: sha1:c5ce3cb05e863aadf02f36bf6a7fc2501a41fa9f

-- Enter migration here

ALTER TABLE address ADD COLUMN IF NOT EXISTS name text;
