--! Previous: sha1:56571315495b19579148e0be1b86d7ddb32c479d
--! Hash: sha1:aa44389ccfb3bb2020e1a6b68450171094347f01

-- Enter migration here


DROP TRIGGER IF EXISTS send_document_email_on_create_document ON document;
DROP FUNCTION IF EXISTS send_document_email;


CREATE OR REPLACE FUNCTION send_matter_document_email() RETURNS TRIGGER AS $$
BEGIN
  PERFORM graphile_worker.add_job(
    'sendMatterDocumentEmail',
    json_build_object('matterDocumentId', NEW.id)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
DROP TRIGGER IF EXISTS send_matter_document_email_on_create_document ON matter_document;

CREATE TRIGGER send_matter_document_email_on_create_document
BEFORE
INSERT ON matter_document
FOR EACH ROW EXECUTE PROCEDURE  send_matter_document_email();
