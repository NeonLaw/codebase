--! Previous: sha1:b1b6034167da6c32fbb729684c85c1f18286798d
--! Hash: sha1:a358907bc220de220122016ec4105840bb0d6621

-- Enter migration here

DROP FUNCTION IF EXISTS create_matter_document_from_upload_url;

CREATE OR REPLACE FUNCTION create_unprocessed_matter_document(matter_id UUID, document_template_id UUID, upload_document_url text)
RETURNS matter_document AS $$
DECLARE document_id uuid;
DECLARE current_person_id uuid;
DECLARE matter_document_row_id uuid;
DECLARE matter_document_row matter_document%ROWTYPE;
BEGIN
  INSERT INTO document (filename, document_template_id, documentable_table_name) VALUES (upload_document_url, document_template_id 'matter_document') RETURNING (id) INTO document_id;
  SELECT nullif(current_setting('person.id', true), '')::uuid INTO current_person_id;
  INSERT INTO matter_document (document_id, author_id, matter_id) VALUES (document_id, current_person_id, matter_id) RETURNING (id) INTO matter_document_row_id;
  PERFORM graphile_worker.add_job(
    'saveDocumentInLongTermStorage',
    json_build_object('document_id', document_id)
  );
  SELECT * FROM matter_document WHERE id = matter_document_row_id INTO matter_document_row;
  RETURN matter_document_row;
END;
$$ LANGUAGE plpgsql;

GRANT ALL PRIVILEGES ON FUNCTION create_unprocessed_matter_document TO admin;
REVOKE ALL PRIVILEGES ON FUNCTION create_unprocessed_matter_document FROM anonymous;
REVOKE ALL PRIVILEGES ON FUNCTION create_unprocessed_matter_document FROM portal;
REVOKE ALL PRIVILEGES ON FUNCTION create_unprocessed_matter_document FROM lawyer;

GRANT ALL PRIVILEGES ON document_template TO admin;
