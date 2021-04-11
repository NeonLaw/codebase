--! Previous: sha1:2b5a638b33c5e53511803a473e23c92d808318b7
--! Hash: sha1:a11b012801b2a8294945215dad00cbdddcfda155

-- Enter migration here

COMMENT ON VIEW public.current_user_documents IS '@omit all,many,read';
