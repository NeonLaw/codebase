--! Previous: sha1:054c1b4c8d37946420c886d7983481758ac14653
--! Hash: sha1:48670dbe63272f0b27cd705945a9582c54acfd34

-- Enter migration here

COMMENT ON TABLE public.unprocessed_document IS '@omit all,read,create\nA document to upload';

GRANT INSERT ON unprocessed_document TO portal;
GRANT INSERT ON unprocessed_document TO lawyer;

ALTER TABLE unprocessed_document ADD COLUMN IF NOT EXISTS person_id UUID NOT NULL;

DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'unprocessed_document_person_id_fkey') THEN
ALTER TABLE unprocessed_document ADD CONSTRAINT unprocessed_document_person_id_fkey
FOREIGN KEY (person_id) REFERENCES person(id);

END IF;

END;
$$;

CREATE OR REPLACE FUNCTION process_uploaded_document() RETURNS TRIGGER AS $$
BEGIN
  PERFORM graphile_worker.add_job(
    'processUploadedDocument',
    json_build_object('unprocessedDocumentId', NEW.id)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS on_create_uploaded_document ON public.unprocessed_document;

CREATE TRIGGER on_create_uploaded_document
BEFORE
INSERT ON unprocessed_document
FOR EACH ROW EXECUTE PROCEDURE process_uploaded_document();
