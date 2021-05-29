require_relative "./database"
Sequel::Model.db = NeonPostgres::Database.connection

module NeonPostgres
  module Models
    class Person < Sequel::Model
      one_to_many :matters, key: :primary_contact_id
      one_to_many :matter_documents, key: :author_id
    end

    class DocumentTemplate < Sequel::Model
      one_to_many :documents
    end

    class MatterTemplate < Sequel::Model
      one_to_many :matters
    end

    class Matter < Sequel::Model
      many_to_one :matter_template
      many_to_one :matter_documents
      many_to_one :primary_contact, class: :person, key: :primary_contact_id
    end

    class Document < Sequel::Model
      many_to_one :document_template
      one_to_many :matter_document
    end

    class MatterDocument < Sequel::Model
      many_to_one :document
      many_to_one :matter
      many_to_one :author, class: :person, key: :author_id
    end

    class Question < Sequel::Model
    end
  end
end
