--! Previous: sha1:bf1f38bd234d8294e7e74db54643bd609666912f
--! Hash: sha1:978eff2c4b0e0e0b9be65ced417bb3ee8dc764a2

-- Enter migration here

DROP FUNCTION IF EXISTS add_question_to_end_of_questionnaire;

CREATE OR REPLACE FUNCTION add_question_to_end_of_questionnaire(question_id UUID, questionnaire_id UUID)
RETURNS SETOF questionnaire AS $$
BEGIN
  PERFORM graphile_worker.add_job(
    'addQuestionToEndOfQuestionnaire',
    json_build_object('questionId', question_id, 'questionnaireId', questionnaire_id)
  );
  RETURN QUERY SELECT * FROM questionnaire WHERE id = questionnaire_id;
END;
$$ LANGUAGE plpgsql;

GRANT ALL PRIVILEGES ON FUNCTION add_question_to_end_of_questionnaire TO admin;
REVOKE ALL PRIVILEGES ON FUNCTION add_question_to_end_of_questionnaire FROM anonymous;
REVOKE ALL PRIVILEGES ON FUNCTION add_question_to_end_of_questionnaire FROM portal;
REVOKE ALL PRIVILEGES ON FUNCTION add_question_to_end_of_questionnaire FROM lawyer;
