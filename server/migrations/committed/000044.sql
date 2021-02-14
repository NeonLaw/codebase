--! Previous: sha1:8dec8b1e9ef865beaa6a6d79c3dedae5e5ae839a
--! Hash: sha1:58ed65415e9a792211136d4caae9c468a2894e8d

-- Enter migration here

DROP TABLE IF EXISTS writing;

ALTER TABLE IF EXISTS upload RENAME TO response_document;
ALTER TABLE IF EXISTS private_document RENAME TO matter_document;

ALTER TABLE response_document RENAME COLUMN person_id TO author_id;
ALTER TABLE matter_document RENAME COLUMN person_id TO author_id;
