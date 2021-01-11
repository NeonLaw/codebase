--! Previous: sha1:753ee70cf029eb97cd1c2d6fbce14dfc1dc330f2
--! Hash: sha1:f1a845dac0b6c26dbd38b5b8d21ab9dd22f229a8

-- Enter migration here

CREATE INDEX IF NOT EXISTS matter_template_id_on_questionnaire ON questionnaire(matter_template_id);
