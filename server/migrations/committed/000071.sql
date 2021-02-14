--! Previous: sha1:f1a845dac0b6c26dbd38b5b8d21ab9dd22f229a8
--! Hash: sha1:268d33a246051616dc698e35eea840b8df166f5c

-- Enter migration here

CREATE INDEX IF NOT EXISTS created_at_on_questionnaire ON questionnaire (created_at);
CREATE INDEX IF NOT EXISTS updated_at_on_questionnaire ON questionnaire (updated_at);
