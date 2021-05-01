--! Previous: sha1:0f0eee7daeab46fc5910a55be5dbb569f5e8517c
--! Hash: sha1:384143ff82e39e81213b245924a939ec2f3b63a1

-- Enter migration here

ALTER TABLE IF EXISTS lob.letter RENAME TO letters;
ALTER TABLE IF EXISTS lob.address RENAME TO addresses;
