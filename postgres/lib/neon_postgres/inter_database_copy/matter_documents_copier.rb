require_relative "../database"
require "faker"

module NeonPostgres
  module InterDatabaseCopy
    class MatterDocumentsCopier
      def self.copy(
        from_connection: NeonPostgres::Database.from_connection,
        to_connection: NeonPostgres::Database.to_connection
      )
        new(
          from_connection: from_connection,
          to_connection: to_connection
        ).copy
      end

      def initialize(from_connection:, to_connection:)
        @from_connection = from_connection
        @to_connection = to_connection
      end

      def copy
        from_dataset.each do |row|
          to_connection[:documents].insert_conflict(
            target: :id,
            update: {
              filename: Sequel[:excluded][:filename],
              gcp_url: Sequel[:excluded][:gcp_url],
              document_template_id: Sequel[:excluded][:document_template_id],
              documentable_table_name: Sequel[:excluded][
                :documentable_table_name
              ],
              created_at: Sequel[:excluded][:created_at]
            }
          ).insert({
            id: row.fetch(:document_id),
            filename: row.fetch(:filename),
            gcp_url: row.fetch(:gcp_url),
            documentable_table_name: row.fetch(:documentable_table_name),
            document_template_id: row.fetch(:document_template_id),
            created_at: row.fetch(:created_at)
          })

          matter_id = to_connection[:matters].select(:id).all.sample.fetch(:id)
          author_id = to_connection[:people].select(:id).all.sample.fetch(:id)

          to_connection[:matter_documents].insert_conflict({
            target: :document_id,
            update: {
              matter_id: Sequel[:excluded][:matter_id],
              author_id: Sequel[:excluded][:author_id]
            }
          }).insert({
            document_id: row.fetch(:document_id),
            matter_id: matter_id,
            author_id: author_id
          })
        end
      end

      private

      attr_reader :from_connection, :to_connection

      def from_dataset
        @_from_dataset ||= from_connection[:matter_documents].graph(
          :documents,
          id: Sequel[:matter_documents][:document_id]
        ).graph(
          :matters,
          id: Sequel[:matter_documents][:matter_id]
        ).graph(
          :people,
          id: Sequel[:matter_documents][:author_id]
        ).graph(
          :document_templates,
          id: Sequel[:documents][:document_template_id]
        )
      end
    end
  end
end
