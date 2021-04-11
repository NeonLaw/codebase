--! Previous: sha1:37d19d7890e5008584c29350b1fc20f4c6e379b3
--! Hash: sha1:054c1b4c8d37946420c886d7983481758ac14653

-- Enter migration here

CREATE OR REPLACE VIEW current_user_documents AS (
  SELECT d.id as id, md.id as mdid FROM document d
  INNER JOIN matter_document md ON (md.document_id = d.id)
  LEFT JOIN matter m ON (md.matter_id = m.id)
  LEFT JOIN public.matter_contact mc ON (mc.matter_id = m.id)
  WHERE m.primary_contact_id = (nullif(current_setting('person.id', true), '')::uuid)
  OR mc.contact_id = (nullif(current_setting('person.id', true), '')::uuid)
);
