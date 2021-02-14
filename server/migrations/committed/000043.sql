--! Previous: sha1:45a78342d89bbcb3514a92b8325824a63238c3ad
--! Hash: sha1:8dec8b1e9ef865beaa6a6d79c3dedae5e5ae839a

-- Enter migration here

CREATE OR REPLACE FUNCTION find_or_create_letters_by_lob_identifier(lob_letters_json json)
RETURNS void AS $$
DECLARE
  letter JSON;
BEGIN
  CREATE TEMPORARY TABLE temp_letters (
    lob_identifier varchar,
    lob_record json
   );

  FOR letter IN (SELECT json_array_elements($1) element) LOOP
    INSERT INTO temp_letters (lob_identifier, lob_record)
    VALUES (letter->>'id', letter);
  END LOOP;

  INSERT INTO letter (lob_identifier, lob_record)
  SELECT lob_identifier, lob_record FROM temp_letters
  ON CONFLICT (lob_identifier) DO UPDATE SET lob_record = EXCLUDED.lob_record;

  INSERT INTO sync (resource_name) VALUES ('lob_letter');

  DROP TABLE temp_letters;
END;
$$ LANGUAGE plpgsql;

CREATE UNIQUE INDEX IF NOT EXISTS lob_identifier ON letter (lob_identifier);

ALTER TABLE letter ALTER COLUMN addressor_id DROP NOT NULL;
ALTER TABLE letter ALTER COLUMN addressee_id DROP NOT NULL;
ALTER TABLE letter ALTER COLUMN document_id DROP NOT NULL;
