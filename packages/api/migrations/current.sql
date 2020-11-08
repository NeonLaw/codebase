-- Enter migration here

CREATE OR REPLACE FUNCTION find_or_create_letter_by_lob_identifier(lob_letters_json json) RETURNS void AS $$
DECLARE
  letter JSON;
BEGIN
  FOR letter IN (SELECT json_array_elements($1) element) LOOP
    RAISE NOTICE '%', letter->>'id';
  END LOOP;
END;
$$ LANGUAGE plpgsql;
