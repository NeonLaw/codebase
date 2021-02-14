--! Previous: sha1:e1b726084908c2fbf6d7cec751faed4ab2e96f88
--! Hash: sha1:9e66afb870e70c734f28c17329558af2b4698dab

-- Enter migration here

CREATE OR REPLACE FUNCTION upsert_question_to_neo4j() RETURNS TRIGGER AS $$
BEGIN
  PERFORM graphile_worker.add_job(
    'upsertQuestionToNeo4j',
    json_build_object('questionId', NEW.id)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS upsert_question_to_neo4j_on_question_create ON public.question;

CREATE TRIGGER upsert_question_to_neo4j_on_question_create
BEFORE
INSERT ON question
FOR EACH ROW EXECUTE PROCEDURE upsert_question_to_neo4j();

DROP TRIGGER IF EXISTS upsert_question_to_neo4j_on_question_update ON public.question;

CREATE TRIGGER upsert_question_to_neo4j_on_question_update
BEFORE
UPDATE ON question
FOR EACH ROW EXECUTE PROCEDURE upsert_question_to_neo4j();
