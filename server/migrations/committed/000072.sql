--! Previous: sha1:268d33a246051616dc698e35eea840b8df166f5c
--! Hash: sha1:76e4653c56f8f3df86637ca87a9eec157114b0d1

-- Enter migration here

ALTER TABLE response ALTER COLUMN answer TYPE json USING answer::json;
ALTER TABLE letter ALTER COLUMN body TYPE json USING body::json;
