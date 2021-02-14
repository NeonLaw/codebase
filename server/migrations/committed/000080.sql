--! Previous: sha1:8a97aee44962ef6bf64ce96cf99db7e3893469af
--! Hash: sha1:6134b278f941ac733828c7eda63b4671dd79fe47

-- Enter migration here

CREATE OR REPLACE FUNCTION update_questionnaire_from_neo4j(questionnaire_id UUID) RETURNS VOID AS $$
BEGIN
  PERFORM graphile_worker.add_job(
    'updateQuestionnaireFromNeo4j',
    json_build_object('questionnaireId', $1)
  );
  RETURN;
END;
$$ LANGUAGE plpgsql;
