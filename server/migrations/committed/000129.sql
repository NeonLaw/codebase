--! Previous: sha1:012995dfc3bb862ad9964a05690284d538b8a21a
--! Hash: sha1:0f0eee7daeab46fc5910a55be5dbb569f5e8517c

-- Enter migration here

ALTER TABLE IF EXISTS task RENAME TO tasks;
ALTER TABLE IF EXISTS task_template RENAME TO task_templates;
