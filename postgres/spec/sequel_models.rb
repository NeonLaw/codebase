class Person < Sequel::Model
  one_to_many :matters, key: :primary_contact_id
end

class DocumentTemplate < Sequel::Model; end

class MatterTemplate < Sequel::Model
  one_to_many :matters
end

class Matter < Sequel::Model
  many_to_one :matter_template
  many_to_one :primary_contact, class: :person, key: :primary_contact_id
end
