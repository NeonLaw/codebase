--! Previous: sha1:8fd0fc431bb746ff3d4c03cfb0f6618d084f16ed
--! Hash: sha1:939f9a83c9cfc4f292668476209744971496668e

-- Enter migration here

-- This function updates enqueues a welcome e-mail to send
CREATE OR REPLACE FUNCTION send_welcome_email() RETURNS TRIGGER AS $$
BEGIN
  PERFORM graphile_worker.add_job('sendWelcomeEmail', json_build_object('personId', NEW.id));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS send_welcome_email_on_create_person ON public.person;

CREATE TRIGGER send_welcome_email_on_create_person
BEFORE
INSERT ON person
FOR EACH ROW EXECUTE PROCEDURE send_welcome_email();
