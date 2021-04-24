--! Previous: sha1:82bbc4d82e80cb96f1d6ddd963ab16fad3ee6df2
--! Hash: sha1:4d982e08d273796ef7aab14c015152ec0561521e

-- Enter migration here

ALTER TABLE matter_template DROP COLUMN IF EXISTS javascript_module;

ALTER TABLE matter_template DROP COLUMN IF EXISTS active;

ALTER TABLE matter_template ADD COLUMN IF NOT EXISTS description JSON NOT NULL DEFAULT '{}';

CREATE TABLE IF NOT EXISTS task_template(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));

ALTER TABLE task_template DROP COLUMN IF EXISTS matter_template_id;

ALTER TABLE task_template ADD COLUMN IF NOT EXISTS name text NOT NULL;
ALTER TABLE task_template ADD COLUMN IF NOT EXISTS description JSON NOT NULL DEFAULT '{}';

CREATE TABLE IF NOT EXISTS task(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));

ALTER TABLE task ADD COLUMN IF NOT EXISTS matter_id uuid NOT NULL;

DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'task_matter_id_fkey') THEN
ALTER TABLE task ADD CONSTRAINT task_matter_id_fkey
FOREIGN KEY (matter_id) REFERENCES matter(id);

END IF;

END;
$$;

ALTER TABLE task ADD COLUMN IF NOT EXISTS task_template_id uuid NOT NULL;

DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'task_task_template_id_fkey') THEN
ALTER TABLE task ADD CONSTRAINT task_task_template_id_fkey
FOREIGN KEY (task_template_id) REFERENCES task_template(id);

END IF;

END;
$$;

ALTER TABLE task ADD COLUMN IF NOT EXISTS owner_id uuid NOT NULL;

DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'task_owner_id_fkey') THEN
ALTER TABLE task ADD CONSTRAINT task_owner_id_fkey
FOREIGN KEY (owner_id) REFERENCES person(id);

END IF;

END;
$$;

ALTER TABLE task_template ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;
ALTER TABLE task_template ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;
DROP TRIGGER IF EXISTS set_updated_at_on_task_template ON task_template;
CREATE TRIGGER set_updated_at_on_task_template
BEFORE
UPDATE ON task_template
FOR EACH ROW EXECUTE PROCEDURE set_updated_at();

ALTER TABLE task ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;
ALTER TABLE task ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;
DROP TRIGGER IF EXISTS set_updated_at_on_task ON task;
CREATE TRIGGER set_updated_at_on_task
BEFORE
UPDATE ON task
FOR EACH ROW EXECUTE PROCEDURE set_updated_at();

ALTER TABLE task ADD COLUMN IF NOT EXISTS due_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;
ALTER TABLE task ADD COLUMN IF NOT EXISTS status TEXT NOT NULL;
