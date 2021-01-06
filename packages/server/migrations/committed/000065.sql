--! Previous: sha1:939f9a83c9cfc4f292668476209744971496668e
--! Hash: sha1:809bff8ee22fb744fdfe3a8ab9450a4642eccd6e

-- Enter migration here

-- Update the send welcome email function with rate limiting
CREATE OR REPLACE FUNCTION send_welcome_email() RETURNS TRIGGER AS $$
BEGIN
  PERFORM graphile_worker.add_job(
    'sendWelcomeEmail',
    json_build_object('personId', NEW.id),
    flags => ARRAY[
      'sendSendgridEmail'
    ]
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS send_welcome_email_on_create_person ON public.person;

CREATE TRIGGER send_welcome_email_on_create_person
BEFORE
INSERT ON person
FOR EACH ROW EXECUTE PROCEDURE send_welcome_email();
