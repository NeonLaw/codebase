--! Previous: sha1:3a955a308f2e9beb5698aa39a186077880c229c0
--! Hash: sha1:071802fe30b4fd5b009fffde66af147ada034cdb

-- Enter migration here

CREATE TABLE IF NOT EXISTS sync(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));

ALTER TABLE sync ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE sync ALTER COLUMN created_at SET NOT NULL;

ALTER TABLE sync ADD COLUMN IF NOT EXISTS resource_name VARCHAR NOT NULL;

ALTER TABLE sync ADD CONSTRAINT sync_resource_name_check CHECK (
  resource_name IN (
    'hello_sign_document',
    'lob_address',
    'lob_letter',
    'logrocket_events',
    'stripe_customer',
    'stripe_payment',
    'xero_invoice',
    'zendesk_ticket'
  )
);

CREATE UNIQUE INDEX IF NOT EXISTS sync_resource_name_created_at ON sync (resource_name, created_at);

CREATE INDEX IF NOT EXISTS address_person_id ON address(person_id);
CREATE INDEX IF NOT EXISTS document_document_template_id ON document(document_template_id);
CREATE INDEX IF NOT EXISTS letter_document_id ON letter(document_id);
CREATE INDEX IF NOT EXISTS public_document_document_id ON public_document(document_id);
CREATE INDEX IF NOT EXISTS private_document_document_id ON private_document(document_id);
CREATE INDEX IF NOT EXISTS private_document_person_id ON private_document(person_id);
CREATE INDEX IF NOT EXISTS upload_document_id ON upload(document_id);
CREATE INDEX IF NOT EXISTS upload_person_id ON upload(person_id);
CREATE INDEX IF NOT EXISTS writing_document_id ON writing(document_id);
CREATE INDEX IF NOT EXISTS writing_person_id ON writing(person_id);
