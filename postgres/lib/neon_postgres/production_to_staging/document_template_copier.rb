module NeonPostgres
  module ProductionToStaging
    class DocumentTemplateCopier
      def self.copy(production_connection:, staging_connection:)
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
        production_connection[:document_template].all.each do |dt|
          staging_connection[:document_template]
        end
      end

      private

      attr_reader :production_connection, :staging_connection
    end
  end
end
