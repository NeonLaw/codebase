--! Previous: sha1:9e66afb870e70c734f28c17329558af2b4698dab
--! Hash: sha1:84478640560051dc938a7e0b8c05a605a2db1f17

-- Enter migration here

CREATE OR REPLACE FUNCTION upsert_questionnaire_to_neo4j() RETURNS TRIGGER AS $$
BEGIN
  PERFORM graphile_worker.add_job(
    'upsertQuestionToNeo4j',
    json_build_object('questionnaireId', NEW.id)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS upsert_questionnaire_to_neo4j_on_questionnaire_create ON public.questionnaire;

CREATE TRIGGER upsert_questionnaire_to_neo4j_on_questionnaire_create
BEFORE
INSERT ON questionnaire
FOR EACH ROW EXECUTE PROCEDURE upsert_questionnaire_to_neo4j();

DROP TRIGGER IF EXISTS upsert_questionnaire_to_neo4j_on_questionnaire_update ON public.questionnaire;

CREATE TRIGGER upsert_questionnaire_to_neo4j_on_questionnaire_update
BEFORE
UPDATE ON questionnaire
FOR EACH ROW EXECUTE PROCEDURE upsert_questionnaire_to_neo4j();
