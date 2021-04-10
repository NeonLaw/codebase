--! Previous: sha1:c38e2dbc6a292782014315339114a21468c8cc95
--! Hash: sha1:fbff9a20fd13470e02c85c1fb79fc5099a5c27b2

-- Enter migration here

CREATE INDEX IF NOT EXISTS letter_addressee_id ON letter (addressee_id);

CREATE INDEX IF NOT EXISTS letter_addressor_id ON letter (addressor_id);

CREATE INDEX IF NOT EXISTS response_person_id ON response (person_id);

CREATE INDEX IF NOT EXISTS matter_contact_contact_id ON matter_contact (contact_id);

CREATE INDEX IF NOT EXISTS matter_contact_matter_id ON matter_contact (matter_id);

CREATE UNIQUE INDEX IF NOT EXISTS unique_contact_per_matter ON matter_contact (contact_id, matter_id);

CREATE INDEX IF NOT EXISTS unprocessed_document_processed_document_id ON unprocessed_document (processed_document_id);

CREATE INDEX IF NOT EXISTS unprocessed_document_document_template_id ON unprocessed_document (document_template_id);

CREATE INDEX IF NOT EXISTS response_document_response_id ON response_document (response_id);
