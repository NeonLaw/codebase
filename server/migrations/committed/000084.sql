--! Previous: sha1:ab29b237216198d446084d5a936e7b5a0041d72e
--! Hash: sha1:6b78ad8929c53581dcb379269166e399f45f0fe0

-- Enter migration here

GRANT ALL ON matter_document TO admin;

CREATE OR REPLACE FUNCTION create_matter_document_from_upload_url(matter_id UUID, matter_document_template_id UUID, upload_document_url text)
RETURNS matter_document AS $$
DECLARE document_id uuid;
DECLARE current_person_id uuid;
DECLARE matter_document_row_id uuid;
DECLARE matter_document_row matter_document%ROWTYPE;
BEGIN
  INSERT INTO document (filename, documentable_table_name) VALUES (upload_document_url, 'matter_document') RETURNING (id) INTO document_id;
  SELECT nullif(current_setting('person.id', true), '')::uuid INTO current_person_id;
  INSERT INTO matter_document (document_id, author_id, matter_document_template_id, matter_id) VALUES (document_id, current_person_id, matter_document_template_id, matter_id) RETURNING (id) INTO matter_document_row_id;
  PERFORM graphile_worker.add_job(
    'saveDocumentInLongTermStorage',
    json_build_object('document_id', document_id)
  );
  SELECT * FROM matter_document WHERE id = matter_document_row_id INTO matter_document_row;
  RETURN matter_document_row;
END;
$$ LANGUAGE plpgsql;
