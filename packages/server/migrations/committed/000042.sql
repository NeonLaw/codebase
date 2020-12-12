--! Previous: sha1:071802fe30b4fd5b009fffde66af147ada034cdb
--! Hash: sha1:45a78342d89bbcb3514a92b8325824a63238c3ad

-- Enter migration here

ALTER TABLE address ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;

ALTER TABLE address ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;


DROP TRIGGER IF EXISTS set_updated_at_on_address ON public.address;

CREATE TRIGGER set_updated_at_on_address
BEFORE
UPDATE ON address
FOR EACH ROW EXECUTE PROCEDURE set_updated_at();

ALTER TABLE document ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;

ALTER TABLE document ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;

DROP TRIGGER IF EXISTS set_updated_at_on_document ON public.document;

CREATE TRIGGER set_updated_at_on_document
BEFORE
UPDATE ON document
FOR EACH ROW EXECUTE PROCEDURE set_updated_at();
