--! Previous: sha1:a50c18603f2c2385e6e4190c52a0af6df091e42b
--! Hash: sha1:012995dfc3bb862ad9964a05690284d538b8a21a

-- Enter migration here

ALTER TABLE IF EXISTS address RENAME TO addresses;
ALTER TABLE IF EXISTS document RENAME TO documents;
ALTER TABLE IF EXISTS document_template RENAME TO document_templates;
ALTER TABLE IF EXISTS letter RENAME TO letters;
ALTER TABLE IF EXISTS matter RENAME TO matters;
ALTER TABLE IF EXISTS matter_contact RENAME TO matter_contacts;
ALTER TABLE IF EXISTS matter_document RENAME TO matter_documents;
ALTER TABLE IF EXISTS matter_template RENAME TO matter_templates;
ALTER TABLE IF EXISTS person RENAME TO people;
ALTER TABLE IF EXISTS question RENAME TO questions;
ALTER TABLE IF EXISTS questionnaire RENAME TO questionnaires;
ALTER TABLE IF EXISTS response RENAME TO responses;
ALTER TABLE IF EXISTS response_document RENAME TO response_documents;
ALTER TABLE IF EXISTS unprocessed_document RENAME TO unprocessed_documents;
