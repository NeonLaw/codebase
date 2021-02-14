--! Previous: sha1:978eff2c4b0e0e0b9be65ced417bb3ee8dc764a2
--! Hash: sha1:a4fb5dfa7fc3968ca708d022947eaa46352f39a9

-- Enter migration here

DROP FUNCTION IF EXISTS add_related_question_relationship;

CREATE OR REPLACE FUNCTION add_related_question_relationship(first_question_id UUID, second_question_id UUID)
RETURNS SETOF question AS $$
BEGIN
  PERFORM graphile_worker.add_job(
    'addRelatedQuestionRelationship',
    json_build_object('firstQuestionId', first_question_id, 'secondQuestionId', second_question_id)
  );
  RETURN QUERY SELECT * FROM question WHERE id = first_question_id OR id = second_question_id;
END;
$$ LANGUAGE plpgsql;

GRANT ALL PRIVILEGES ON FUNCTION add_related_question_relationship TO admin;
REVOKE ALL PRIVILEGES ON FUNCTION add_related_question_relationship FROM anonymous;
REVOKE ALL PRIVILEGES ON FUNCTION add_related_question_relationship FROM portal;
REVOKE ALL PRIVILEGES ON FUNCTION add_related_question_relationship FROM lawyer;
