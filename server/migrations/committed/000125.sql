--! Previous: sha1:607bfbcdf0ca007e5a69afa8635cde9f21fb108a
--! Hash: sha1:82bbc4d82e80cb96f1d6ddd963ab16fad3ee6df2

-- Enter migration here

CREATE OR REPLACE FUNCTION send_lob_mail() RETURNS TRIGGER AS $$
BEGIN
  PERFORM graphile_worker.add_job(
    'sendLobLetter',
    json_build_object('letterId', NEW.id)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
