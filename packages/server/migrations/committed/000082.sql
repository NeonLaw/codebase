--! Previous: sha1:f70b99def4287024f4dd5462362d082fbf70bf25
--! Hash: sha1:b692e2bf108dfab769124c072b1290b0045cebc0

-- Enter migration here

COMMENT ON TABLE public.matter_document IS '@omit all,create,update,delete\nA document associated with a matter';
COMMENT ON TABLE public.response_document IS '@omit all,create,update,delete\nA document associated with a response';
COMMENT ON TABLE public.document IS '@omit all,create,update,delete\nA document';

-- Create a matter document with the matter id, the matter template id, and
-- upload document URL with the
CREATE OR REPLACE FUNCTION create_matter_document_from_upload_url(matter_id UUID, matter_document_template_id UUID, upload_document_url text)
RETURNS matter_document AS $$
DECLARE document_id uuid;
DECLARE current_person_id uuid;
DECLARE matter_document_row matter_document%ROWTYPE;
BEGIN
  INSERT INTO document (filename, documentable_table_name) VALUES (upload_document_url, 'matter_document') RETURNING (id) INTO document_id;
  SELECT nullif(current_setting('person.id', true), '')::uuid INTO current_person_id;
  INSERT INTO matter_document (document_id, author_id, matter_document_template_id) VALUES (document_id, current_person_id, matter_document_template_id) INTO matter_document_row;
  PERFORM graphile_worker.add_job(
    'saveDocumentInLongTermStorage',
    json_build_object('document_id', document_id)
  );
  RETURN matter_document_row;
END;
$$ LANGUAGE plpgsql;

GRANT ALL PRIVILEGES ON FUNCTION create_matter_document_from_upload_url TO admin;
REVOKE ALL PRIVILEGES ON FUNCTION create_matter_document_from_upload_url FROM anonymous;
REVOKE ALL PRIVILEGES ON FUNCTION create_matter_document_from_upload_url FROM portal;
REVOKE ALL PRIVILEGES ON FUNCTION create_matter_document_from_upload_url FROM lawyer;
