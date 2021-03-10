DO $$
DECLARE nevada_c_corp_matter_template_id UUID;
DECLARE primary_contact_id UUID;
BEGIN

INSERT INTO person (email, role) VALUES ('portal@sink.sendgrid.com', 'portal') ON CONFLICT DO NOTHING RETURNING (id) INTO primary_contact_id;
INSERT INTO person (email, role) VALUES ('admin@sink.sendgrid.com', 'admin') ON CONFLICT DO NOTHING;

INSERT INTO matter_template (name, javascript_module, category) VALUES ('California Bar Prep', '@neonlaw/matter-templates/california/bar-prep', 'bar-prep') ON CONFLICT DO NOTHING;
INSERT INTO matter_template (name, javascript_module, category) VALUES ('Nevada C Corp', '@neonlaw/matter-templates/nevada/c-corp', 'business') ON CONFLICT DO NOTHING RETURNING (id) INTO nevada_c_corp_matter_template_id;
INSERT INTO matter_template (name, javascript_module, category) VALUES ('Nevada LLC', '@neonlaw/matter-templates/nevada/llc', 'business') ON CONFLICT DO NOTHING;

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

INSERT INTO matter (name, primary_contact_id, matter_template_id) VALUES ('Nevada LLC Demo', primary_contact_id, nevada_c_corp_matter_template_id);
END $$;
