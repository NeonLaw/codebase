require_relative "./database"
require "faker"

module NeonPostgres
  class DocumentSanitizer
    def self.sanitize(
      document:, database_connection: NeonPostgres::Database.connection
    )
      new(
        database_connection: database_connection,
        document: document
      ).sanitize
    end

    def initialize(database_connection:, document:)
      @database_connection = database_connection
      @document = document
    end

    def sanitize
      values = documents_connection.find(id: document.fetch(:id)).first

      filename = "#{Faker::Internet.uuid}.pdf"

      values[:filename] = filename
      values[:gcp_url] = "https://neon-law-staging-private-assets.storage."\
        "googleapis.com/matters/#{Faker::Internet.uuid}/#{filename}"

      documents_connection.insert_conflict(
        target: :id,
        update: {
          filename: Sequel[:excluded][:filename],
          gcp_url: Sequel[:excluded][:gcp_url]
        }
      ).insert(values)
    end

    private

    attr_reader :database_connection, :document

    def documents_connection
      @_documents_connection ||= database_connection[:documents]
    end
  end
end
