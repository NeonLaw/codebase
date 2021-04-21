--! Previous: sha1:2f80036f8756e0a2b6182cb5547694178597ce73
--! Hash: sha1:56571315495b19579148e0be1b86d7ddb32c479d

-- Enter migration here

CREATE OR REPLACE FUNCTION send_document_email() RETURNS TRIGGER AS $$
BEGIN
  PERFORM graphile_worker.add_job(
    'sendDocumentEmail',
    json_build_object('documentId', NEW.id)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS send_document_email_on_create_document ON document;

CREATE TRIGGER send_document_email_on_create_document
BEFORE
INSERT ON document
FOR EACH ROW EXECUTE PROCEDURE send_document_email();
