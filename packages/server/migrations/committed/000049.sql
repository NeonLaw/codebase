--! Previous: sha1:c5ce3cb05e863aadf02f36bf6a7fc2501a41fa9f
--! Hash: sha1:87df5bce3cf12bfb160c6659c85be80586abe7fe

-- Enter migration here

CREATE UNIQUE INDEX IF NOT EXISTS matter_template_names ON matter_template (name);
CREATE UNIQUE INDEX IF NOT EXISTS document_template_names ON document_template (name);
