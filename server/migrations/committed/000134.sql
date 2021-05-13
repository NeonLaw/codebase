--! Previous: sha1:9fa0da51f9e6537efdb18149a42f4a1438455418
--! Hash: sha1:96e2f61ad0c4cfd9fcfd99cd84068e2fa30b587e

-- Enter migration here

ALTER TABLE document_templates ALTER COLUMN abbreviation SET NOT NULL;

ALTER TABLE document_templates ALTER COLUMN jurisdiction SET NOT NULL;
