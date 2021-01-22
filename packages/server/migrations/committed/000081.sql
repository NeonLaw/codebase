--! Previous: sha1:6134b278f941ac733828c7eda63b4671dd79fe47
--! Hash: sha1:f70b99def4287024f4dd5462362d082fbf70bf25

-- Enter migration here

GRANT ALL PRIVILEGES ON FUNCTION update_questionnaire_from_neo4j TO admin;
REVOKE ALL PRIVILEGES ON FUNCTION update_questionnaire_from_neo4j FROM anonymous;
REVOKE ALL PRIVILEGES ON FUNCTION update_questionnaire_from_neo4j FROM portal;
REVOKE ALL PRIVILEGES ON FUNCTION update_questionnaire_from_neo4j FROM lawyer;

DROP FUNCTION IF EXISTS update_questionnaire_from_neo4j;
CREATE OR REPLACE FUNCTION update_questionnaire_from_neo4j(questionnaire_id UUID) RETURNS questionnaire AS $$
DECLARE current_questionnaire questionnaire%ROWTYPE;
BEGIN
  PERFORM graphile_worker.add_job(
    'updateQuestionnaireFromNeo4j',
    json_build_object('questionnaireId', $1)
  );
  SELECT * FROM questionnaire WHERE id = questionnaire_id LIMIT 1 INTO current_questionnaire;
  RETURN current_questionnaire;
END;
$$ LANGUAGE plpgsql;
