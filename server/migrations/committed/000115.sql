--! Previous: sha1:48670dbe63272f0b27cd705945a9582c54acfd34
--! Hash: sha1:f54cf811d8f199930c03990dbb3a3f7b6f20ba39

-- Enter migration here


COMMENT ON TABLE public.unprocessed_document IS '@omit all,update,delete,many\nA document to upload';
