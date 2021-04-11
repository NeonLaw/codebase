--! Previous: sha1:a11b012801b2a8294945215dad00cbdddcfda155
--! Hash: sha1:236db4ac275efa909a612d8e03775d9b34c5cd7f

-- Enter migration here

COMMENT ON VIEW public.current_user_documents IS '@omit all,many,read,update,create,delete';
