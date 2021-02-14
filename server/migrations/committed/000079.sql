--! Previous: sha1:84478640560051dc938a7e0b8c05a605a2db1f17
--! Hash: sha1:8a97aee44962ef6bf64ce96cf99db7e3893469af

-- Enter migration here

CREATE OR REPLACE FUNCTION upsert_questionnaire_to_neo4j() RETURNS TRIGGER AS $$
BEGIN
  PERFORM graphile_worker.add_job(
    'upsertQuestionnaireToNeo4j',
    json_build_object('questionnaireId', NEW.id)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS upsert_questionnaire_to_neo4j_on_questionnaire_create ON public.questionnaire;

CREATE TRIGGER upsert_questionnaire_to_neo4j_on_questionnaire_create
AFTER
INSERT ON questionnaire
FOR EACH ROW EXECUTE PROCEDURE upsert_questionnaire_to_neo4j();

DROP TRIGGER IF EXISTS upsert_questionnaire_to_neo4j_on_questionnaire_update ON public.questionnaire;

CREATE TRIGGER upsert_questionnaire_to_neo4j_on_questionnaire_update
AFTER
UPDATE ON questionnaire
FOR EACH ROW EXECUTE PROCEDURE upsert_questionnaire_to_neo4j();

DROP TRIGGER IF EXISTS upsert_question_to_neo4j_on_question_create ON public.question;

CREATE TRIGGER upsert_question_to_neo4j_on_question_create
AFTER
INSERT ON question
FOR EACH ROW EXECUTE PROCEDURE upsert_question_to_neo4j();

DROP TRIGGER IF EXISTS upsert_question_to_neo4j_on_question_update ON public.question;

CREATE TRIGGER upsert_question_to_neo4j_on_question_update
AFTER
UPDATE ON question
FOR EACH ROW EXECUTE PROCEDURE upsert_question_to_neo4j();

CREATE SCHEMA IF NOT EXISTS graphile_worker;

GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA graphile_worker TO neon_law_admin;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA graphile_worker TO neon_law_admin;
GRANT ALL PRIVILEGES ON SCHEMA graphile_worker TO neon_law_admin;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA graphile_worker TO neon_law_admin;

GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA graphile_worker TO admin;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA graphile_worker TO admin;
GRANT ALL PRIVILEGES ON SCHEMA graphile_worker TO admin;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA graphile_worker TO admin;

CREATE TABLE IF NOT EXISTS graphile_worker.jobs(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));

GRANT ALL ON graphile_worker.jobs TO neon_law_admin;
GRANT ALL ON graphile_worker.jobs TO admin;

DROP POLICY IF EXISTS admin_select_matter ON graphile_worker.jobs;
CREATE POLICY admin_select_matter ON graphile_worker.jobs FOR SELECT TO admin USING (true);
DROP POLICY IF EXISTS admin_insert_matter ON graphile_worker.jobs;
CREATE POLICY admin_insert_matter ON graphile_worker.jobs FOR INSERT TO admin WITH CHECK (true);

DROP POLICY IF EXISTS neon_law_admin_select_matter ON graphile_worker.jobs;
CREATE POLICY neon_law_admin_select_matter ON graphile_worker.jobs FOR SELECT TO neon_law_admin USING (true);
DROP POLICY IF EXISTS neon_law_admin_insert_matter ON graphile_worker.jobs;
CREATE POLICY neon_law_admin_insert_matter ON graphile_worker.jobs FOR INSERT TO neon_law_admin WITH CHECK (true);
