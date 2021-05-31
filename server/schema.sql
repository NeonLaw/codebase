--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3 (Debian 13.3-1.pgdg100+1)
-- Dumped by pg_dump version 13.3 (Debian 13.3-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: accounting; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA accounting;


--
-- Name: graphile_migrate; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA graphile_migrate;


--
-- Name: graphile_worker; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA graphile_worker;


--
-- Name: lob; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA lob;


--
-- Name: citext; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;


--
-- Name: EXTENSION citext; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';


--
-- Name: pg_stat_statements; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_stat_statements WITH SCHEMA public;


--
-- Name: EXTENSION pg_stat_statements; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION pg_stat_statements IS 'track planning and execution statistics of all SQL statements executed';


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
-- Name: gcp_url; Type: DOMAIN; Schema: public; Owner: -
--

CREATE DOMAIN public.gcp_url AS text
	CONSTRAINT gcp_url_check CHECK ((VALUE ~ 'https://neon-law-(staging|production)-private-assets.storage.googleapis.com/(matters|responses)/.*'::text));


--
-- Name: DOMAIN gcp_url; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON DOMAIN public.gcp_url IS 'the GCP Storage URL of the private file.';


--
-- Name: slug; Type: DOMAIN; Schema: public; Owner: -
--

CREATE DOMAIN public.slug AS text
	CONSTRAINT slug_check CHECK ((VALUE ~ '^[a-zA-Z]+[a-zA-Z\-]*[a-zA-Z]$'::text));


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: questionnaires; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.questionnaires (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    matter_template_id uuid NOT NULL,
    question_tree json DEFAULT '{}'::json NOT NULL
);


--
-- Name: COLUMN questionnaires.id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.questionnaires.id IS '@omit create,insert,update\nThe unique ID of a question';


--
-- Name: COLUMN questionnaires.name; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.questionnaires.name IS 'The name of the questionnaire';


--
-- Name: add_question_to_end_of_questionnaire(uuid, uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.add_question_to_end_of_questionnaire(question_id uuid, questionnaire_id uuid) RETURNS SETOF public.questionnaires
    LANGUAGE plpgsql
    AS $$
BEGIN
  PERFORM graphile_worker.add_job(
    'addQuestionToEndOfQuestionnaire',
    json_build_object('questionId', question_id, 'questionnaireId', questionnaire_id)
  );
  RETURN QUERY SELECT * FROM questionnaire WHERE id = questionnaire_id;
END;
$$;


--
-- Name: questions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.questions (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    prompt character varying NOT NULL,
    question_type character varying NOT NULL,
    options character varying[],
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    help_text json,
    slug public.slug NOT NULL,
    CONSTRAINT question_question_type_check CHECK (((question_type)::text = ANY ((ARRAY['single-choice'::character varying, 'single-date'::character varying, 'single-file-upload'::character varying, 'single-line-text'::character varying, 'text'::character varying, 'date-range'::character varying, 'number'::character varying, 'multiple-file-upload'::character varying])::text[])))
);


--
-- Name: COLUMN questions.id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.questions.id IS '@omit create,insert,update\nThe unique ID of a question';


--
-- Name: COLUMN questions.prompt; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.questions.prompt IS 'The prompt is what the question is asking for.';


--
-- Name: COLUMN questions.question_type; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.questions.question_type IS 'The question_type designates if a question is a multiple-choice, text, number, file-upload, or date/time question.';


--
-- Name: COLUMN questions.options; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.questions.options IS 'An optional column containing options to answer a question.';


--
-- Name: add_related_question_relationship(uuid, uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.add_related_question_relationship(first_question_id uuid, second_question_id uuid) RETURNS SETOF public.questions
    LANGUAGE plpgsql
    AS $$
BEGIN
  PERFORM graphile_worker.add_job(
    'addRelatedQuestionRelationship',
    json_build_object('firstQuestionId', first_question_id, 'secondQuestionId', second_question_id)
  );
  RETURN QUERY SELECT * FROM question WHERE id = first_question_id OR id = second_question_id;
END;
$$;


--
-- Name: create_person_and_sub(character varying, character varying, character varying, character varying, character varying); Type: PROCEDURE; Schema: public; Owner: -
--

CREATE PROCEDURE public.create_person_and_sub(t_identifier character varying, t_email character varying, t_connection character varying, t_role character varying, t_name character varying)
    LANGUAGE plpgsql
    AS $$
DECLARE new_person_id uuid;

BEGIN
  INSERT INTO person (email, role, name) VALUES (t_email, t_role, t_name) RETURNING id INTO new_person_id;
  INSERT INTO sub (identifier, connection, person_id) VALUES (t_identifier, t_connection, new_person_id);
  COMMIT;
END;
$$;


--
-- Name: create_primary_key_id_if_not_exists(text); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.create_primary_key_id_if_not_exists(t_name text) RETURNS void
    LANGUAGE plpgsql
    AS $$
BEGIN
    IF NOT EXISTS (SELECT constraint_name
                   FROM information_schema.table_constraints
                   WHERE table_name = t_name AND constraint_type = 'PRIMARY KEY') THEN
        ALTER TABLE t_name ADD PRIMARY KEY (id);
    END IF;
END;
$$;


--
-- Name: create_relationship(text, uuid, text, uuid, text); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.create_relationship(relationship text, from_id uuid, from_type text, to_id uuid, to_type text) RETURNS text
    LANGUAGE plpgsql
    AS $_$
BEGIN
  PERFORM graphile_worker.add_job(
    'createNeo4jRelationship',
    json_build_object('relationship', $1, 'fromId', $2, 'fromType', $3, 'toId', $4, 'toType', $5)
  );
  RETURN format('Created relationship %s from %s with id %s to %s with id %s', relationship, from_type, from_id, to_type, to_id);
END;
$_$;


--
-- Name: create_role_if_not_exists(text); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.create_role_if_not_exists(role_name text) RETURNS void
    LANGUAGE plpgsql
    AS $_$
BEGIN
  EXECUTE FORMAT('CREATE ROLE "%s" WITH NOLOGIN', $1);
  EXCEPTION WHEN DUPLICATE_OBJECT THEN
  RAISE NOTICE 'not creating role % -- it already exists', $1;
END;
$_$;


--
-- Name: people; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.people (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    role public.citext DEFAULT 'portal'::public.citext NOT NULL,
    email public.citext NOT NULL,
    picture character varying(64),
    sub character varying,
    flags text DEFAULT ''::text NOT NULL,
    CONSTRAINT person_flags_check CHECK (((length(flags) < 2000) AND (flags ~ '^[A-Z_\-,]*$'::text)))
);


--
-- Name: TABLE people; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.people IS '@omit create,insert,delete\nA person in our system';


--
-- Name: COLUMN people.id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.people.id IS '@omit create,insert,update,delete\nThe unique ID of a person';


--
-- Name: COLUMN people.name; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.people.name IS 'The name of a person';


--
-- Name: COLUMN people.created_at; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.people.created_at IS '@omit create,insert,update,delete\nWhen the person was created in our system.';


--
-- Name: COLUMN people.updated_at; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.people.updated_at IS '@omit create,insert,update,delete\nWhen the person was last updated in our system.';


--
-- Name: COLUMN people.role; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.people.role IS '@omit create,insert,update,delete\nThe role of a person. This is either portal, lawyer, or admin.';


--
-- Name: COLUMN people.email; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.people.email IS '@omit create,insert,update,delete\nThe email of a person, this must be unique in our system';


--
-- Name: COLUMN people.picture; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.people.picture IS '@omit create,insert,update,delete\nThe picture of a person. To update this value you must use the updateCurrentUserPicture function';


--
-- Name: get_current_user(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.get_current_user() RETURNS public.people
    LANGUAGE plpgsql STABLE
    AS $$
DECLARE current_person_id uuid;
DECLARE current_person person%ROWTYPE;
BEGIN
  SELECT nullif(current_setting('person.id', true), '')::uuid INTO current_person_id;
  SELECT * FROM person WHERE id = current_person_id LIMIT 1 INTO current_person;
  RETURN current_person;
END;
$$;


--
-- Name: process_uploaded_document(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.process_uploaded_document() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  PERFORM graphile_worker.add_job(
    'processUploadedDocument',
    json_build_object('unprocessedDocumentId', NEW.id)
  );
  RETURN NEW;
END;
$$;


--
-- Name: response_person_match(uuid, uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.response_person_match(response_id uuid, person_id uuid) RETURNS boolean
    LANGUAGE plpgsql STABLE
    AS $_$
DECLARE match BOOLEAN := false;
BEGIN
  SELECT true
  FROM response AS r
  INNER JOIN questionnaire_response AS qr
  ON r.questionnaire_response_id = qr.id
  INNER JOIN person AS person
  ON qr.person_id = $2
  WHERE id = $1
  INTO match;
RETURN match;
end;
$_$;


--
-- Name: send_lob_mail(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.send_lob_mail() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  PERFORM graphile_worker.add_job(
    'sendLobLetter',
    json_build_object('letterId', NEW.id)
  );
  RETURN NEW;
END;
$$;


--
-- Name: send_matter_document_email(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.send_matter_document_email() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  PERFORM graphile_worker.add_job(
    'sendMatterDocumentEmail',
    json_build_object('matterDocumentId', NEW.id)
  );
  RETURN NEW;
END;
$$;


--
-- Name: set_updated_at(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.set_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;


--
-- Name: update_questionnaire_from_neo4j(uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.update_questionnaire_from_neo4j(questionnaire_id uuid) RETURNS public.questionnaires
    LANGUAGE plpgsql
    AS $_$
DECLARE current_questionnaire questionnaire%ROWTYPE;
BEGIN
  PERFORM graphile_worker.add_job(
    'updateQuestionnaireFromNeo4j',
    json_build_object('questionnaireId', $1)
  );
  SELECT * FROM questionnaire WHERE id = questionnaire_id LIMIT 1 INTO current_questionnaire;
  RETURN current_questionnaire;
END;
$_$;


--
-- Name: upsert_question_to_neo4j(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.upsert_question_to_neo4j() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  PERFORM graphile_worker.add_job(
    'upsertQuestionToNeo4j',
    json_build_object('questionId', NEW.id)
  );
  RETURN NEW;
END;
$$;


--
-- Name: upsert_questionnaire_to_neo4j(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.upsert_questionnaire_to_neo4j() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  PERFORM graphile_worker.add_job(
    'upsertQuestionnaireToNeo4j',
    json_build_object('questionnaireId', NEW.id)
  );
  RETURN NEW;
END;
$$;


--
-- Name: bills; Type: TABLE; Schema: accounting; Owner: -
--

CREATE TABLE accounting.bills (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL
);


--
-- Name: current; Type: TABLE; Schema: graphile_migrate; Owner: -
--

CREATE TABLE graphile_migrate.current (
    filename text DEFAULT 'current.sql'::text NOT NULL,
    content text NOT NULL,
    date timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: migrations; Type: TABLE; Schema: graphile_migrate; Owner: -
--

CREATE TABLE graphile_migrate.migrations (
    hash text NOT NULL,
    previous_hash text,
    filename text NOT NULL,
    date timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: jobs; Type: TABLE; Schema: graphile_worker; Owner: -
--

CREATE TABLE graphile_worker.jobs (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL
);


--
-- Name: addresses; Type: TABLE; Schema: lob; Owner: -
--

CREATE TABLE lob.addresses (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    lob_identifier text NOT NULL,
    name text,
    description text,
    route text,
    city text,
    country text,
    zip text,
    state text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


--
-- Name: letters; Type: TABLE; Schema: lob; Owner: -
--

CREATE TABLE lob.letters (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    lob_identifier text NOT NULL,
    description text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    url text,
    address_placement text,
    color boolean,
    double_sided boolean,
    from_address_identifier text,
    to_address_identifier text
);


--
-- Name: addresses; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.addresses (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    route character varying DEFAULT 'route'::character varying NOT NULL,
    street_number character varying DEFAULT 'street_number'::character varying NOT NULL,
    city character varying DEFAULT 'locality'::character varying NOT NULL,
    state character varying DEFAULT 'administrative_area_level_1'::character varying NOT NULL,
    postal_code character varying DEFAULT 'postal_code'::character varying NOT NULL,
    country character varying DEFAULT 'country'::character varying NOT NULL,
    person_id uuid NOT NULL,
    lob_identifier character varying NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    name text,
    public boolean DEFAULT false NOT NULL
);


--
-- Name: documents; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.documents (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    filename character varying(255) NOT NULL,
    documentable_table_name character varying NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    document_template_id uuid NOT NULL,
    gcp_url public.gcp_url NOT NULL,
    CONSTRAINT document_documentable_table_name_check CHECK (((documentable_table_name)::text = ANY ((ARRAY['response_document'::character varying, 'matter_document'::character varying])::text[])))
);


--
-- Name: TABLE documents; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.documents IS '@omit all,create,update,delete\nA document';


--
-- Name: matter_contacts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.matter_contacts (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    contact_id uuid NOT NULL,
    matter_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    role character varying NOT NULL,
    CONSTRAINT matter_contact_role CHECK (((role)::text = ANY ((ARRAY['read_only_client'::character varying, 'client'::character varying, 'billing'::character varying, 'lawyer'::character varying, 'clerk'::character varying])::text[])))
);


--
-- Name: matter_documents; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.matter_documents (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    document_id uuid NOT NULL,
    author_id uuid NOT NULL,
    matter_id uuid NOT NULL
);


--
-- Name: TABLE matter_documents; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.matter_documents IS '@omit all,create,update,delete\nA document associated with a matter';


--
-- Name: matters; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.matters (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    primary_contact_id uuid,
    matter_template_id uuid NOT NULL,
    description json DEFAULT '{}'::json NOT NULL,
    active boolean DEFAULT true NOT NULL,
    slug public.slug NOT NULL
);


--
-- Name: TABLE matters; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.matters IS 'A legal matter, managed by Neon Law admin.';


--
-- Name: current_user_documents; Type: VIEW; Schema: public; Owner: -
--

CREATE VIEW public.current_user_documents AS
 SELECT d.id,
    md.id AS mdid
   FROM (((public.documents d
     JOIN public.matter_documents md ON ((md.document_id = d.id)))
     LEFT JOIN public.matters m ON ((md.matter_id = m.id)))
     LEFT JOIN public.matter_contacts mc ON ((mc.matter_id = m.id)))
  WHERE ((m.primary_contact_id = (NULLIF(current_setting('person.id'::text, true), ''::text))::uuid) OR (mc.contact_id = (NULLIF(current_setting('person.id'::text, true), ''::text))::uuid));


--
-- Name: VIEW current_user_documents; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON VIEW public.current_user_documents IS '@omit all,many,read,update,create,delete';


--
-- Name: matter_templates; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.matter_templates (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name text NOT NULL,
    category character varying(32) DEFAULT 'litigation'::character varying NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    description json DEFAULT '{}'::json NOT NULL,
    CONSTRAINT matter_template_category_check CHECK (((category)::text = ANY ((ARRAY['data-deletion'::character varying, 'inmate-letter'::character varying, 'litigation'::character varying, 'estate'::character varying, 'bar-prep'::character varying, 'business'::character varying])::text[])))
);


--
-- Name: current_user_matters; Type: VIEW; Schema: public; Owner: -
--

CREATE VIEW public.current_user_matters AS
 SELECT matter.id,
    matter.name,
    matter.created_at,
    matter.updated_at,
    matter.primary_contact_id,
    matter.matter_template_id,
    matter.description,
    matter.active,
    matter.id AS matter_id,
    matter_template.name AS matter_template_name,
    matter_template.category AS matter_template_category
   FROM ((public.matters matter
     LEFT JOIN public.matter_contacts matter_contacts ON ((matter_contacts.matter_id = matter.id)))
     LEFT JOIN public.matter_templates matter_template ON ((matter_template.id = matter.matter_template_id)))
  WHERE ((matter.primary_contact_id = (NULLIF(current_setting('person.id'::text, true), ''::text))::uuid) OR (matter_contacts.contact_id = (NULLIF(current_setting('person.id'::text, true), ''::text))::uuid));


--
-- Name: document_templates; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.document_templates (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    abbreviation character varying NOT NULL,
    jurisdiction character varying NOT NULL
);


--
-- Name: letters; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.letters (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    lob_identifier character varying,
    body json NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    addressee_id uuid NOT NULL,
    addressor_id uuid NOT NULL
);


--
-- Name: response_documents; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.response_documents (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    document_id uuid NOT NULL,
    response_id uuid NOT NULL
);


--
-- Name: TABLE response_documents; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.response_documents IS '@omit all,create,update,delete\nA document associated with a response';


--
-- Name: responses; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.responses (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    question_id uuid NOT NULL,
    answer json NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    person_id uuid NOT NULL
);


--
-- Name: COLUMN responses.id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.responses.id IS '@omit create,insert,update\nThe unique ID of a response';


--
-- Name: task_templates; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.task_templates (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name text NOT NULL,
    description json DEFAULT '{}'::json NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: tasks; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tasks (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    matter_id uuid NOT NULL,
    task_template_id uuid NOT NULL,
    owner_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    due_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    status text NOT NULL
);


--
-- Name: unprocessed_documents; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.unprocessed_documents (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    documentable_type character varying(255) NOT NULL,
    documentable_id uuid NOT NULL,
    document_template_id uuid NOT NULL,
    processed_document_id uuid,
    person_id uuid NOT NULL,
    gcp_url public.gcp_url NOT NULL
);


--
-- Name: TABLE unprocessed_documents; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.unprocessed_documents IS '@omit all,update,delete,many\nA document to upload';


--
-- Name: bills bills_pkey; Type: CONSTRAINT; Schema: accounting; Owner: -
--

ALTER TABLE ONLY accounting.bills
    ADD CONSTRAINT bills_pkey PRIMARY KEY (id);


--
-- Name: current current_pkey; Type: CONSTRAINT; Schema: graphile_migrate; Owner: -
--

ALTER TABLE ONLY graphile_migrate.current
    ADD CONSTRAINT current_pkey PRIMARY KEY (filename);


--
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: graphile_migrate; Owner: -
--

ALTER TABLE ONLY graphile_migrate.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (hash);


--
-- Name: jobs jobs_pkey; Type: CONSTRAINT; Schema: graphile_worker; Owner: -
--

ALTER TABLE ONLY graphile_worker.jobs
    ADD CONSTRAINT jobs_pkey PRIMARY KEY (id);


--
-- Name: addresses address_pkey; Type: CONSTRAINT; Schema: lob; Owner: -
--

ALTER TABLE ONLY lob.addresses
    ADD CONSTRAINT address_pkey PRIMARY KEY (id);


--
-- Name: letters letter_pkey; Type: CONSTRAINT; Schema: lob; Owner: -
--

ALTER TABLE ONLY lob.letters
    ADD CONSTRAINT letter_pkey PRIMARY KEY (id);


--
-- Name: addresses address_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT address_pkey PRIMARY KEY (id);


--
-- Name: documents document_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.documents
    ADD CONSTRAINT document_pkey PRIMARY KEY (id);


--
-- Name: document_templates document_template_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.document_templates
    ADD CONSTRAINT document_template_pkey PRIMARY KEY (id);


--
-- Name: letters letter_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.letters
    ADD CONSTRAINT letter_pkey PRIMARY KEY (id);


--
-- Name: matter_contacts matter_contact_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.matter_contacts
    ADD CONSTRAINT matter_contact_pkey PRIMARY KEY (id);


--
-- Name: matters matter_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.matters
    ADD CONSTRAINT matter_pkey PRIMARY KEY (id);


--
-- Name: matter_templates matter_template_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.matter_templates
    ADD CONSTRAINT matter_template_pkey PRIMARY KEY (id);


--
-- Name: people person_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.people
    ADD CONSTRAINT person_pkey PRIMARY KEY (id);


--
-- Name: matter_documents private_document_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.matter_documents
    ADD CONSTRAINT private_document_pkey PRIMARY KEY (id);


--
-- Name: questions question_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.questions
    ADD CONSTRAINT question_pkey PRIMARY KEY (id);


--
-- Name: questionnaires questionnaire_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.questionnaires
    ADD CONSTRAINT questionnaire_pkey PRIMARY KEY (id);


--
-- Name: responses response_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.responses
    ADD CONSTRAINT response_pkey PRIMARY KEY (id);


--
-- Name: tasks task_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT task_pkey PRIMARY KEY (id);


--
-- Name: task_templates task_template_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.task_templates
    ADD CONSTRAINT task_template_pkey PRIMARY KEY (id);


--
-- Name: unprocessed_documents unprocessed_document_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.unprocessed_documents
    ADD CONSTRAINT unprocessed_document_pkey PRIMARY KEY (id);


--
-- Name: response_documents upload_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.response_documents
    ADD CONSTRAINT upload_pkey PRIMARY KEY (id);


--
-- Name: unique_address_lob_identifier; Type: INDEX; Schema: lob; Owner: -
--

CREATE UNIQUE INDEX unique_address_lob_identifier ON lob.addresses USING btree (lob_identifier);


--
-- Name: unique_letter_lob_identifier; Type: INDEX; Schema: lob; Owner: -
--

CREATE UNIQUE INDEX unique_letter_lob_identifier ON lob.letters USING btree (lob_identifier);


--
-- Name: address_names; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX address_names ON public.addresses USING btree (name);


--
-- Name: address_person_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX address_person_id ON public.addresses USING btree (person_id);


--
-- Name: created_at_on_questionnaire; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX created_at_on_questionnaire ON public.questionnaires USING btree (created_at);


--
-- Name: docmuent_templates_abbreviation; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX docmuent_templates_abbreviation ON public.document_templates USING btree (abbreviation);


--
-- Name: document_document_templates; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX document_document_templates ON public.documents USING btree (document_template_id);


--
-- Name: document_filenames; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX document_filenames ON public.documents USING btree (filename);


--
-- Name: document_id_on_matter_document; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX document_id_on_matter_document ON public.matter_documents USING btree (document_id);


--
-- Name: letter_addressee_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX letter_addressee_id ON public.letters USING btree (addressee_id);


--
-- Name: letter_addressor_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX letter_addressor_id ON public.letters USING btree (addressor_id);


--
-- Name: lob_identifier; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX lob_identifier ON public.letters USING btree (lob_identifier);


--
-- Name: matter_contact_contact_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX matter_contact_contact_id ON public.matter_contacts USING btree (contact_id);


--
-- Name: matter_contact_matter_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX matter_contact_matter_id ON public.matter_contacts USING btree (matter_id);


--
-- Name: matter_created_at_on_matter; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX matter_created_at_on_matter ON public.matters USING btree (created_at);


--
-- Name: matter_document_matters; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX matter_document_matters ON public.matter_documents USING btree (matter_id);


--
-- Name: matter_names; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX matter_names ON public.matters USING btree (name);


--
-- Name: matter_primary_contacts; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX matter_primary_contacts ON public.matters USING btree (primary_contact_id);


--
-- Name: matter_template_categories; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX matter_template_categories ON public.matter_templates USING btree (category);


--
-- Name: matter_template_id_on_matter; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX matter_template_id_on_matter ON public.matters USING btree (matter_template_id);


--
-- Name: matter_template_id_on_questionnaire; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX matter_template_id_on_questionnaire ON public.questionnaires USING btree (matter_template_id);


--
-- Name: matter_template_names; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX matter_template_names ON public.matter_templates USING btree (name);


--
-- Name: matter_updated_at_on_matter; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX matter_updated_at_on_matter ON public.matters USING btree (updated_at);


--
-- Name: person_subs; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX person_subs ON public.people USING btree (sub);


--
-- Name: private_document_document_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX private_document_document_id ON public.matter_documents USING btree (document_id);


--
-- Name: private_document_person_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX private_document_person_id ON public.matter_documents USING btree (author_id);


--
-- Name: question_id_on_response; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX question_id_on_response ON public.responses USING btree (question_id);


--
-- Name: question_names; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX question_names ON public.questionnaires USING btree (name);


--
-- Name: question_prompts; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX question_prompts ON public.questions USING btree (prompt);


--
-- Name: response_document_response_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX response_document_response_id ON public.response_documents USING btree (response_id);


--
-- Name: response_person_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX response_person_id ON public.responses USING btree (person_id);


--
-- Name: unique_contact_per_matter; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX unique_contact_per_matter ON public.matter_contacts USING btree (contact_id, matter_id);


--
-- Name: unique_document_template_name; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX unique_document_template_name ON public.document_templates USING btree (name);


--
-- Name: unique_gcp_url; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX unique_gcp_url ON public.documents USING btree (gcp_url);


--
-- Name: unique_matters_slug; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX unique_matters_slug ON public.matters USING btree (slug);


--
-- Name: unique_person_email; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX unique_person_email ON public.people USING btree (email);


--
-- Name: unique_public_addresses; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX unique_public_addresses ON public.addresses USING btree (public, name);


--
-- Name: unique_questions_slug; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX unique_questions_slug ON public.questions USING btree (slug);


--
-- Name: unprocessed_document_document_template_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX unprocessed_document_document_template_id ON public.unprocessed_documents USING btree (document_template_id);


--
-- Name: unprocessed_document_processed_document_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX unprocessed_document_processed_document_id ON public.unprocessed_documents USING btree (processed_document_id);


--
-- Name: unprocessed_documents_gcp_urls; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX unprocessed_documents_gcp_urls ON public.unprocessed_documents USING btree (gcp_url);


--
-- Name: updated_at_on_questionnaire; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX updated_at_on_questionnaire ON public.questionnaires USING btree (updated_at);


--
-- Name: upload_document_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX upload_document_id ON public.response_documents USING btree (document_id);


--
-- Name: unprocessed_documents on_create_uploaded_document; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER on_create_uploaded_document BEFORE INSERT ON public.unprocessed_documents FOR EACH ROW EXECUTE FUNCTION public.process_uploaded_document();


--
-- Name: letters send_lob_mail_on_create_letter; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER send_lob_mail_on_create_letter AFTER INSERT ON public.letters FOR EACH ROW EXECUTE FUNCTION public.send_lob_mail();


--
-- Name: matter_documents send_matter_document_email_on_create_document; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER send_matter_document_email_on_create_document BEFORE INSERT ON public.matter_documents FOR EACH ROW EXECUTE FUNCTION public.send_matter_document_email();


--
-- Name: addresses set_updated_at_on_address; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER set_updated_at_on_address BEFORE UPDATE ON public.addresses FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: documents set_updated_at_on_document; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER set_updated_at_on_document BEFORE UPDATE ON public.documents FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: document_templates set_updated_at_on_document_template; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER set_updated_at_on_document_template BEFORE UPDATE ON public.document_templates FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: matters set_updated_at_on_matter; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER set_updated_at_on_matter BEFORE UPDATE ON public.matters FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: matter_contacts set_updated_at_on_matter_contact; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER set_updated_at_on_matter_contact BEFORE UPDATE ON public.matter_contacts FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: matter_templates set_updated_at_on_matter_template; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER set_updated_at_on_matter_template BEFORE UPDATE ON public.matter_templates FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: people set_updated_at_on_person; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER set_updated_at_on_person BEFORE UPDATE ON public.people FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: questions set_updated_at_on_question; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER set_updated_at_on_question BEFORE UPDATE ON public.questions FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: questionnaires set_updated_at_on_questionnaire; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER set_updated_at_on_questionnaire BEFORE UPDATE ON public.questionnaires FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: responses set_updated_at_on_response; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER set_updated_at_on_response BEFORE UPDATE ON public.responses FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: tasks set_updated_at_on_task; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER set_updated_at_on_task BEFORE UPDATE ON public.tasks FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: task_templates set_updated_at_on_task_template; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER set_updated_at_on_task_template BEFORE UPDATE ON public.task_templates FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: questions upsert_question_to_neo4j_on_question_create; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER upsert_question_to_neo4j_on_question_create AFTER INSERT ON public.questions FOR EACH ROW EXECUTE FUNCTION public.upsert_question_to_neo4j();


--
-- Name: questions upsert_question_to_neo4j_on_question_update; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER upsert_question_to_neo4j_on_question_update AFTER UPDATE ON public.questions FOR EACH ROW EXECUTE FUNCTION public.upsert_question_to_neo4j();


--
-- Name: questionnaires upsert_questionnaire_to_neo4j_on_questionnaire_create; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER upsert_questionnaire_to_neo4j_on_questionnaire_create AFTER INSERT ON public.questionnaires FOR EACH ROW EXECUTE FUNCTION public.upsert_questionnaire_to_neo4j();


--
-- Name: questionnaires upsert_questionnaire_to_neo4j_on_questionnaire_update; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER upsert_questionnaire_to_neo4j_on_questionnaire_update AFTER UPDATE ON public.questionnaires FOR EACH ROW EXECUTE FUNCTION public.upsert_questionnaire_to_neo4j();


--
-- Name: migrations migrations_previous_hash_fkey; Type: FK CONSTRAINT; Schema: graphile_migrate; Owner: -
--

ALTER TABLE ONLY graphile_migrate.migrations
    ADD CONSTRAINT migrations_previous_hash_fkey FOREIGN KEY (previous_hash) REFERENCES graphile_migrate.migrations(hash);


--
-- Name: letters lob_letter_from_address_fkey; Type: FK CONSTRAINT; Schema: lob; Owner: -
--

ALTER TABLE ONLY lob.letters
    ADD CONSTRAINT lob_letter_from_address_fkey FOREIGN KEY (from_address_identifier) REFERENCES lob.addresses(lob_identifier);


--
-- Name: letters lob_letter_to_address_fkey; Type: FK CONSTRAINT; Schema: lob; Owner: -
--

ALTER TABLE ONLY lob.letters
    ADD CONSTRAINT lob_letter_to_address_fkey FOREIGN KEY (to_address_identifier) REFERENCES lob.addresses(lob_identifier);


--
-- Name: addresses address_person_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT address_person_id_fkey FOREIGN KEY (person_id) REFERENCES public.people(id);


--
-- Name: documents document_document_template_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.documents
    ADD CONSTRAINT document_document_template_id_fkey FOREIGN KEY (document_template_id) REFERENCES public.document_templates(id);


--
-- Name: letters letter_addressee_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.letters
    ADD CONSTRAINT letter_addressee_id_fkey FOREIGN KEY (addressee_id) REFERENCES public.addresses(id);


--
-- Name: letters letter_addressor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.letters
    ADD CONSTRAINT letter_addressor_id_fkey FOREIGN KEY (addressor_id) REFERENCES public.addresses(id);


--
-- Name: matter_contacts matter_contact_contact_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.matter_contacts
    ADD CONSTRAINT matter_contact_contact_id_fkey FOREIGN KEY (contact_id) REFERENCES public.people(id);


--
-- Name: matter_contacts matter_contact_matter_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.matter_contacts
    ADD CONSTRAINT matter_contact_matter_id_fkey FOREIGN KEY (matter_id) REFERENCES public.matters(id);


--
-- Name: matters matter_matter_template_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.matters
    ADD CONSTRAINT matter_matter_template_id_fkey FOREIGN KEY (matter_template_id) REFERENCES public.matter_templates(id);


--
-- Name: matters matter_primary_contact_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.matters
    ADD CONSTRAINT matter_primary_contact_id_fkey FOREIGN KEY (primary_contact_id) REFERENCES public.people(id) ON DELETE CASCADE;


--
-- Name: matter_documents private_document_document_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.matter_documents
    ADD CONSTRAINT private_document_document_id_fkey FOREIGN KEY (document_id) REFERENCES public.documents(id);


--
-- Name: matter_documents private_document_matter_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.matter_documents
    ADD CONSTRAINT private_document_matter_id_fkey FOREIGN KEY (matter_id) REFERENCES public.matters(id);


--
-- Name: matter_documents private_document_person_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.matter_documents
    ADD CONSTRAINT private_document_person_id_fkey FOREIGN KEY (author_id) REFERENCES public.people(id);


--
-- Name: questionnaires questionnaire_matter_template_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.questionnaires
    ADD CONSTRAINT questionnaire_matter_template_id_fkey FOREIGN KEY (matter_template_id) REFERENCES public.matter_templates(id);


--
-- Name: responses response_person_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.responses
    ADD CONSTRAINT response_person_id_fkey FOREIGN KEY (person_id) REFERENCES public.people(id);


--
-- Name: responses response_question_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.responses
    ADD CONSTRAINT response_question_id_fkey FOREIGN KEY (question_id) REFERENCES public.questions(id);


--
-- Name: tasks task_matter_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT task_matter_id_fkey FOREIGN KEY (matter_id) REFERENCES public.matters(id);


--
-- Name: tasks task_owner_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT task_owner_id_fkey FOREIGN KEY (owner_id) REFERENCES public.people(id);


--
-- Name: tasks task_task_template_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT task_task_template_id_fkey FOREIGN KEY (task_template_id) REFERENCES public.task_templates(id);


--
-- Name: unprocessed_documents unprocessed_document_document_template_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.unprocessed_documents
    ADD CONSTRAINT unprocessed_document_document_template_id_fkey FOREIGN KEY (document_template_id) REFERENCES public.document_templates(id);


--
-- Name: unprocessed_documents unprocessed_document_person_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.unprocessed_documents
    ADD CONSTRAINT unprocessed_document_person_id_fkey FOREIGN KEY (person_id) REFERENCES public.people(id);


--
-- Name: unprocessed_documents unprocessed_document_processed_document_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.unprocessed_documents
    ADD CONSTRAINT unprocessed_document_processed_document_id_fkey FOREIGN KEY (processed_document_id) REFERENCES public.documents(id);


--
-- Name: response_documents upload_document_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.response_documents
    ADD CONSTRAINT upload_document_id_fkey FOREIGN KEY (document_id) REFERENCES public.documents(id);


--
-- Name: response_documents upload_response_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.response_documents
    ADD CONSTRAINT upload_response_id_fkey FOREIGN KEY (response_id) REFERENCES public.responses(id);


--
-- Name: jobs admin_insert_matter; Type: POLICY; Schema: graphile_worker; Owner: -
--

CREATE POLICY admin_insert_matter ON graphile_worker.jobs FOR INSERT TO admin WITH CHECK (true);


--
-- Name: jobs admin_select_matter; Type: POLICY; Schema: graphile_worker; Owner: -
--

CREATE POLICY admin_select_matter ON graphile_worker.jobs FOR SELECT TO admin USING (true);


--
-- Name: jobs neon_law_admin_insert_matter; Type: POLICY; Schema: graphile_worker; Owner: -
--

CREATE POLICY neon_law_admin_insert_matter ON graphile_worker.jobs FOR INSERT TO neon_law_admin WITH CHECK (true);


--
-- Name: jobs neon_law_admin_select_matter; Type: POLICY; Schema: graphile_worker; Owner: -
--

CREATE POLICY neon_law_admin_select_matter ON graphile_worker.jobs FOR SELECT TO neon_law_admin USING (true);


--
-- Name: addresses; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.addresses ENABLE ROW LEVEL SECURITY;

--
-- Name: matters admin_delete_matter; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY admin_delete_matter ON public.matters FOR DELETE TO admin USING (true);


--
-- Name: matters admin_modify_matters; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY admin_modify_matters ON public.matters TO admin USING (true) WITH CHECK (true);


--
-- Name: people admin_modify_person; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY admin_modify_person ON public.people TO admin USING (true) WITH CHECK (true);


--
-- Name: responses admin_modify_response; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY admin_modify_response ON public.responses TO admin USING (true) WITH CHECK (true);


--
-- Name: addresses admin_select_address; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY admin_select_address ON public.addresses FOR SELECT TO admin USING (true);


--
-- Name: documents admin_select_document; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY admin_select_document ON public.documents FOR SELECT TO admin USING (true);


--
-- Name: matter_documents admin_select_matter_document; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY admin_select_matter_document ON public.matter_documents FOR SELECT TO admin USING (true);


--
-- Name: addresses anonymous_select_address; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY anonymous_select_address ON public.addresses FOR SELECT TO anonymous USING ((public = true));


--
-- Name: documents; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;

--
-- Name: matters lawyer_insert_matter; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY lawyer_insert_matter ON public.matters FOR INSERT TO lawyer WITH CHECK (true);


--
-- Name: responses lawyer_insert_response; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY lawyer_insert_response ON public.responses FOR INSERT TO lawyer WITH CHECK (public.response_person_match(id, (NULLIF(current_setting('person.id'::text, true), ''::text))::uuid));


--
-- Name: people lawyer_modify_people; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY lawyer_modify_people ON public.people TO lawyer USING (true) WITH CHECK (true);


--
-- Name: addresses lawyer_select_address; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY lawyer_select_address ON public.addresses FOR SELECT TO lawyer USING (true);


--
-- Name: matters lawyer_select_matter; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY lawyer_select_matter ON public.matters FOR SELECT TO lawyer USING ((id IN ( SELECT current_user_matters.matter_id
   FROM public.current_user_matters)));


--
-- Name: responses lawyer_select_response; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY lawyer_select_response ON public.responses FOR SELECT TO lawyer USING (public.response_person_match(id, (NULLIF(current_setting('person.id'::text, true), ''::text))::uuid));


--
-- Name: matter_documents; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.matter_documents ENABLE ROW LEVEL SECURITY;

--
-- Name: matters; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.matters ENABLE ROW LEVEL SECURITY;

--
-- Name: people; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.people ENABLE ROW LEVEL SECURITY;

--
-- Name: matters portal_insert_matter; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY portal_insert_matter ON public.matters FOR INSERT TO portal WITH CHECK ((primary_contact_id = (NULLIF(current_setting('person.id'::text, true), ''::text))::uuid));


--
-- Name: responses portal_insert_response; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY portal_insert_response ON public.responses FOR INSERT TO portal WITH CHECK (public.response_person_match(id, (NULLIF(current_setting('person.id'::text, true), ''::text))::uuid));


--
-- Name: documents portal_select_document; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY portal_select_document ON public.documents FOR SELECT TO portal USING ((id IN ( SELECT current_user_documents.id
   FROM public.current_user_documents)));


--
-- Name: matters portal_select_matter; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY portal_select_matter ON public.matters FOR SELECT TO portal USING ((id IN ( SELECT current_user_matters.matter_id
   FROM public.current_user_matters)));


--
-- Name: matter_documents portal_select_matter_document; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY portal_select_matter_document ON public.matter_documents FOR SELECT TO portal USING ((id IN ( SELECT current_user_documents.mdid
   FROM public.current_user_documents)));


--
-- Name: people portal_select_person; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY portal_select_person ON public.people FOR SELECT TO portal USING ((id = (NULLIF(current_setting('person.id'::text, true), ''::text))::uuid));


--
-- Name: responses portal_select_response; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY portal_select_response ON public.responses FOR SELECT TO portal USING (public.response_person_match(id, (NULLIF(current_setting('person.id'::text, true), ''::text))::uuid));


--
-- Name: people portal_update_person; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY portal_update_person ON public.people FOR UPDATE TO portal USING ((id = (NULLIF(current_setting('person.id'::text, true), ''::text))::uuid)) WITH CHECK ((id = (NULLIF(current_setting('person.id'::text, true), ''::text))::uuid));


--
-- Name: responses; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.responses ENABLE ROW LEVEL SECURITY;

--
-- Name: SCHEMA graphile_worker; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA graphile_worker TO neon_law_admin;
GRANT ALL ON SCHEMA graphile_worker TO admin;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT USAGE ON SCHEMA public TO anonymous;
GRANT USAGE ON SCHEMA public TO portal;
GRANT USAGE ON SCHEMA public TO lawyer;
GRANT USAGE ON SCHEMA public TO admin;


--
-- Name: TABLE questionnaires; Type: ACL; Schema: public; Owner: -
--

GRANT SELECT ON TABLE public.questionnaires TO anonymous;
GRANT SELECT ON TABLE public.questionnaires TO portal;
GRANT SELECT ON TABLE public.questionnaires TO lawyer;
GRANT ALL ON TABLE public.questionnaires TO admin;


--
-- Name: FUNCTION add_question_to_end_of_questionnaire(question_id uuid, questionnaire_id uuid); Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON FUNCTION public.add_question_to_end_of_questionnaire(question_id uuid, questionnaire_id uuid) TO admin;


--
-- Name: TABLE questions; Type: ACL; Schema: public; Owner: -
--

GRANT SELECT ON TABLE public.questions TO anonymous;
GRANT SELECT ON TABLE public.questions TO portal;
GRANT SELECT ON TABLE public.questions TO lawyer;
GRANT ALL ON TABLE public.questions TO admin;


--
-- Name: FUNCTION add_related_question_relationship(first_question_id uuid, second_question_id uuid); Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON FUNCTION public.add_related_question_relationship(first_question_id uuid, second_question_id uuid) TO admin;


--
-- Name: FUNCTION create_relationship(relationship text, from_id uuid, from_type text, to_id uuid, to_type text); Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON FUNCTION public.create_relationship(relationship text, from_id uuid, from_type text, to_id uuid, to_type text) TO admin;


--
-- Name: TABLE people; Type: ACL; Schema: public; Owner: -
--

GRANT SELECT,UPDATE ON TABLE public.people TO portal;
GRANT ALL ON TABLE public.people TO lawyer;
GRANT ALL ON TABLE public.people TO admin;


--
-- Name: COLUMN people.name; Type: ACL; Schema: public; Owner: -
--

GRANT UPDATE(name) ON TABLE public.people TO portal;
GRANT UPDATE(name) ON TABLE public.people TO lawyer;


--
-- Name: COLUMN people.picture; Type: ACL; Schema: public; Owner: -
--

GRANT UPDATE(picture) ON TABLE public.people TO portal;
GRANT UPDATE(picture) ON TABLE public.people TO lawyer;


--
-- Name: TABLE jobs; Type: ACL; Schema: graphile_worker; Owner: -
--

GRANT ALL ON TABLE graphile_worker.jobs TO neon_law_admin;
GRANT ALL ON TABLE graphile_worker.jobs TO admin;


--
-- Name: TABLE addresses; Type: ACL; Schema: public; Owner: -
--

GRANT SELECT ON TABLE public.addresses TO anonymous;
GRANT ALL ON TABLE public.addresses TO lawyer;
GRANT ALL ON TABLE public.addresses TO admin;


--
-- Name: TABLE documents; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.documents TO admin;
GRANT SELECT ON TABLE public.documents TO portal;


--
-- Name: TABLE matter_contacts; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.matter_contacts TO admin;
GRANT SELECT ON TABLE public.matter_contacts TO portal;
GRANT SELECT ON TABLE public.matter_contacts TO lawyer;


--
-- Name: TABLE matter_documents; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.matter_documents TO admin;
GRANT SELECT ON TABLE public.matter_documents TO portal;


--
-- Name: TABLE matters; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.matters TO lawyer;
GRANT ALL ON TABLE public.matters TO admin;
GRANT SELECT,INSERT ON TABLE public.matters TO portal;


--
-- Name: TABLE current_user_documents; Type: ACL; Schema: public; Owner: -
--

GRANT SELECT ON TABLE public.current_user_documents TO portal;
GRANT SELECT ON TABLE public.current_user_documents TO lawyer;
GRANT SELECT ON TABLE public.current_user_documents TO admin;


--
-- Name: TABLE matter_templates; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.matter_templates TO admin;
GRANT SELECT ON TABLE public.matter_templates TO anonymous;
GRANT SELECT ON TABLE public.matter_templates TO portal;
GRANT SELECT ON TABLE public.matter_templates TO lawyer;


--
-- Name: TABLE current_user_matters; Type: ACL; Schema: public; Owner: -
--

GRANT SELECT ON TABLE public.current_user_matters TO portal;
GRANT SELECT ON TABLE public.current_user_matters TO lawyer;
GRANT SELECT ON TABLE public.current_user_matters TO admin;


--
-- Name: TABLE document_templates; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.document_templates TO admin;
GRANT SELECT ON TABLE public.document_templates TO anonymous;
GRANT SELECT ON TABLE public.document_templates TO portal;
GRANT SELECT ON TABLE public.document_templates TO lawyer;


--
-- Name: TABLE letters; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.letters TO admin;


--
-- Name: TABLE responses; Type: ACL; Schema: public; Owner: -
--

GRANT SELECT ON TABLE public.responses TO portal;
GRANT SELECT ON TABLE public.responses TO lawyer;
GRANT ALL ON TABLE public.responses TO admin;


--
-- Name: COLUMN responses.question_id; Type: ACL; Schema: public; Owner: -
--

GRANT INSERT(question_id) ON TABLE public.responses TO portal;
GRANT INSERT(question_id) ON TABLE public.responses TO lawyer;


--
-- Name: TABLE unprocessed_documents; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.unprocessed_documents TO admin;
GRANT INSERT ON TABLE public.unprocessed_documents TO portal;
GRANT INSERT ON TABLE public.unprocessed_documents TO lawyer;


--
-- PostgreSQL database dump complete
--

