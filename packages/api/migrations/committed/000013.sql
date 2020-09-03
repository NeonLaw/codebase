--! Previous: sha1:59c82db0a184a9a46e6ca2761d545c8d82e40da8
--! Hash: sha1:61ec52fbe5d5cc65ad3f82991f4e4720f6dbb93e

-- Enter migration here

COMMENT ON TABLE public.person IS '@omit all,create,insert,delete\nA person in our system';

COMMENT ON COLUMN public.person.id IS '@omit create,insert,update,delete\nThe unique ID of a person';

COMMENT ON COLUMN public.person.name IS 'The name of a person';

COMMENT ON COLUMN public.person.email IS '@omit create,insert,update,delete\nThe email of a person, this must be unique in our system';

COMMENT ON COLUMN public.person.picture IS '@omit create,insert,update,delete\nThe picture of a person. To update this value you must use the updateCurrentUserPicture function';

COMMENT ON COLUMN public.person.role IS '@omit create,insert,update,delete\nThe role of a person. This is either portal, lawyer, or admin.';

COMMENT ON COLUMN public.person.created_at IS '@omit create,insert,update,delete\nWhen the person was created in our system.';

COMMENT ON COLUMN public.person.updated_at IS '@omit create,insert,update,delete\nWhen the person was last updated in our system.';
