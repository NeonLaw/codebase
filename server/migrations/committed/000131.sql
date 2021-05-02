--! Previous: sha1:384143ff82e39e81213b245924a939ec2f3b63a1
--! Hash: sha1:d1bac625eeddc1d7e8eb1d43c05578bed5b7981c

-- Enter migration here


CREATE UNIQUE INDEX IF NOT EXISTS unique_document_template_name ON document_templates (name);
