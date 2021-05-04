require_relative "../database"

module NeonPostgres
  module InterDatabaseCopy
    class MatterTemplateCopier
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
          to_dataset
            .insert_conflict(
              target: :name,
              update: {
                category: Sequel[:excluded][:category],
                description: Sequel[:excluded][:description]
              }
            ).insert(row)
        end
      end

      private

      attr_reader :from_connection, :to_connection

      def from_dataset
        @_from_dataset ||= from_connection[:matter_templates]
      end

      def to_dataset
        @_to_dataset ||= to_connection[:matter_templates]
      end
    end
  end
end
