INSERT INTO person (email, role) VALUES ('portal@neonlaw.com', 'portal'), ('admin@neonlaw.com', 'admin') ON CONFLICT DO NOTHING;

INSERT INTO matter_template (name, javascript_module, category) VALUES ('California Bar Prep', '@neonlaw/matter-templates/california/bar-prep', 'bar-prep') ON CONFLICT DO NOTHING;

INSERT INTO questionnaire (name, matter_template_id) VALUES ('Community Property', (SELECT id FROM matter_template WHERE name = 'California Bar Prep' LIMIT 1)) ON CONFLICT DO NOTHING;

INSERT INTO question (prompt, question_type, help_text)
VALUES ('Character Evidence', 'text', '[{ "type": "paragraph", "children": [{ "text": "help" }]}]')
ON CONFLICT DO NOTHING;

INSERT INTO question (prompt, question_type, help_text)
VALUES ('Non-Hearsay', 'text', '[{ "type": "paragraph", "children": [{ "text": "help" }]}]')
ON CONFLICT DO NOTHING;

INSERT INTO question (prompt, question_type, help_text)
VALUES ('Hearsay Exception Unavailable Witness', 'text', '[{ "type": "paragraph", "children": [{ "text": "help" }]}]')
ON CONFLICT DO NOTHING;
