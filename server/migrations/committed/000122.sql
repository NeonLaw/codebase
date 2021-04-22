--! Previous: sha1:c6f794e7775a749b67b3805f42377c5f278bb595
--! Hash: sha1:36079d84b0bd4d4d1d51e94a787c5e3eb08ee72b

-- Enter migration here

CREATE INDEX IF NOT EXISTS address_names ON address (name);
