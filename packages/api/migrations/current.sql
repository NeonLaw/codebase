-- Enter migration here

CREATE TABLE IF NOT EXISTS sync(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));

ALTER TABLE sync ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE sync ALTER COLUMN created_at SET NOT NULL;

ALTER TABLE sync ADD COLUMN IF NOT EXISTS resource_name NOT NULL;

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

CREATE UNIQUE INDEX IF NOT EXISTS sync_resource_name_created_at ON sync (resource_name, created_at)

CREATE INDEX IF NOT EXISTS ON "public"."address"("person_id");
CREATE INDEX IF NOT EXISTS ON "public"."document"("document_template_id");
CREATE INDEX IF NOT EXISTS ON "public"."letter"("document_id");
CREATE INDEX IF NOT EXISTS ON "public"."public_document"("document_id");
CREATE INDEX IF NOT EXISTS ON "public"."private_document"("document_id");
CREATE INDEX IF NOT EXISTS ON "public"."private_document"("person_id");
CREATE INDEX IF NOT EXISTS ON "public"."upload"("document_id");
CREATE INDEX IF NOT EXISTS ON "public"."upload"("person_id");
CREATE INDEX IF NOT EXISTS ON "public"."writing"("document_id");
CREATE INDEX IF NOT EXISTS ON "public"."writing"("person_id");
