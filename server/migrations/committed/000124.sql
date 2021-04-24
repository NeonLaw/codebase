--! Previous: sha1:390d812ebd4ef8587ec33b228b3318d58b70af60
--! Hash: sha1:607bfbcdf0ca007e5a69afa8635cde9f21fb108a

-- Enter migration here

CREATE OR REPLACE FUNCTION send_lob_mail() RETURNS TRIGGER AS $$
BEGIN
  PERFORM graphile_worker.add_job(
    'sendLobMail',
    json_build_object('letterId', NEW.id)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS send_lob_mail_on_create_letter ON letter;

CREATE TRIGGER send_lob_mail_on_create_letter
AFTER
INSERT ON letter
FOR EACH ROW EXECUTE PROCEDURE send_lob_mail();
