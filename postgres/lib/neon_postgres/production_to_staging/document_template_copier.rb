require_relative "../database"

module NeonPostgres
  module ProductionToStaging
    class DocumentTemplateCopier
      def self.copy(
        production_connection: NeonPostgres::Database.production_connection,
        staging_connection: NeonPostgres::Database.staging_connection
      )
        new(
          production_connection: production_connection,
          staging_connection: staging_connection
        ).copy
      end

      def initialize(production_connection:, staging_connection:)
        @production_connection = production_connection
        @staging_connection = staging_connection
      end

      def copy
        production_document_templates_dataset.each do |prod_document_template|
          staging_document_templates_dataset
            .insert_conflict(
              target: :name,
              update: { description: Sequel[:excluded][:description] }
            ).insert(prod_document_template)
        end
      end

      private

      attr_reader :production_connection, :staging_connection

      def production_document_templates_dataset
        @_prod_document_templates ||= production_connection[:document_templates]
      end

      def staging_document_templates_dataset
        @_stg_document_templates ||= staging_connection[:document_templates]
      end
    end
  end
end
