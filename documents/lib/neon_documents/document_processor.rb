require "sendgrid-ruby"

module NeonDocuments
  class DocumentProcessor
    def self.encode_and_store_document(unprocessed_document_id:)
      new(
        unprocessed_document_id: unprocessed_document_id
      ).encode_and_store_document
    end

    def initialize(unprocessed_document_id:)
      @unprocessed_document_id = unprocessed_document_id
    end

    def encode_and_store_document
      filename = case document_template.name
      when "Webpage Screenshot"
        NeonDocuments::DocumentTemplates::WebpageScreenshot.processed_filename(
          unprocessed_filename: unprocessed_document
        )
      end

      puts filename
    end

    private

    attr_reader :unprocessed_document_id

    def connection
      @_connection ||= NeonPostgres::Database.connection
    end

    def unprocessed_document
      @_unprocessed_document ||= connection[:unprocessed_documents].find(
        id: unprocessed_document_id
      )
    end

    def document_template
      @_document_template ||= connection[:document_templates].find(
        id: unprocessed_document.fetch(:document_template_id)
      )
    end

    def processed_document_filename
      "#{documentable_type}/#{documentable_id}/#{filename}"
    end

    def filename
      case document_template.name
      when "Webpage Screenshot"
        NeonDocuments::DocumentTemplates::WebpageScreenshot.processed_filename(
          unprocessed_filename: unprocessed_document
        )
      else
        document_template.name
      end
    end
  end
end
