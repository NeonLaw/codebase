--! Previous: sha1:c6eea275155707965c2f7428bd72c4e082f509ed
--! Hash: sha1:7f3a53768f2af4f565aa741d3388a8bad43bd7b8

-- Enter migration here

DROP TRIGGER IF EXISTS send_welcome_email_on_create_person ON people;

DROP FUNCTION IF EXISTS send_welcome_email;
