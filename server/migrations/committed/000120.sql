--! Previous: sha1:aa44389ccfb3bb2020e1a6b68450171094347f01
--! Hash: sha1:6b4fd1bdc4991ea5808c6d2659f642822d15d0aa

-- Enter migration here

CREATE UNIQUE INDEX IF NOT EXISTS document_id_on_matter_document ON matter_document (document_id);
