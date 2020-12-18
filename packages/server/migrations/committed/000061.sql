--! Previous: sha1:24c0d2f5f91d77accb2708569fec7d145147d76e
--! Hash: sha1:ee44ed66d152200937e4e0ebe0792d3aa4e9abfc

-- Enter migration here

ALTER TABLE matter_template ADD CONSTRAINT matter_template_category_check CHECK (
  category IN (
    'data-deletion',
    'inmate-letter',
    'litigation',
    'estate',
    'business'
  )
);
