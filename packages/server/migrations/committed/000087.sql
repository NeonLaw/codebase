--! Previous: sha1:bc8dcdf1ff7879bc5825faac8c639a7df627a1ed
--! Hash: sha1:bf1f38bd234d8294e7e74db54643bd609666912f

-- Enter migration here

DROP FUNCTION IF EXISTS create_relationship;
CREATE OR REPLACE FUNCTION create_relationship(relationship TEXT, from_id UUID, from_type TEXT, to_id UUID, to_type TEXT) RETURNS TEXT AS $$
BEGIN
  PERFORM graphile_worker.add_job(
    'createNeo4jRelationship',
    json_build_object('relationship', $1, 'fromId', $2, 'fromType', $3, 'toId', $4, 'toType', $5)
  );
  RETURN format('Created relationship %s from %s with id %s to %s with id %s', relationship, from_type, from_id, to_type, to_id);
END;
$$ LANGUAGE plpgsql;

GRANT ALL PRIVILEGES ON FUNCTION create_relationship TO admin;
REVOKE ALL PRIVILEGES ON FUNCTION create_relationship FROM anonymous;
REVOKE ALL PRIVILEGES ON FUNCTION create_relationship FROM portal;
REVOKE ALL PRIVILEGES ON FUNCTION create_relationship FROM lawyer;
