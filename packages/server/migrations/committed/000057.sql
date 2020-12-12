--! Previous: sha1:ba75b6874ca490feb005b92e2b33256746220cb3
--! Hash: sha1:906f4fc2c2cb9f069badd3e10c1801455689fbb9

-- Enter migration here

ALTER TABLE document_template ADD CONSTRAINT document_template_read_authorization_check CHECK (
  read_authorization IN (
    'anonymous',
    'portal',
    'lawyer',
    'admin'
  )
);

ALTER TABLE document_template ADD CONSTRAINT document_template_create_authorization_check CHECK (
  create_authorization IN (
    'anonymous',
    'portal',
    'lawyer',
    'admin'
  )
);

ALTER TABLE document_template ADD CONSTRAINT document_template_update_authorization_check CHECK (
  update_authorization IN (
    'anonymous',
    'portal',
    'lawyer',
    'admin'
  )
);

ALTER TABLE document_template ADD CONSTRAINT document_template_delete_authorization_check CHECK (
  delete_authorization IN (
    'anonymous',
    'portal',
    'lawyer',
    'admin'
  )
);
