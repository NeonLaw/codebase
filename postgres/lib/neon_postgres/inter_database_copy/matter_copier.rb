require_relative "../database"
require "faker"

module NeonPostgres
  module InterDatabaseCopy
    class MatterCopier
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
          to_connection[:matter_templates].insert_conflict(
            target: :id,
            update: {
              category: Sequel[:excluded][:category],
              name: Sequel[:excluded][:name],
              description: Sequel[:excluded][:description]
            }
          ).insert({
            id: row.fetch(:matter_template_id),
            name: row.fetch(:matter_templates_name),
            category: row.fetch(:category),
            description: row.fetch(:matter_templates_description)
          })

          to_connection[:people].insert_conflict(
            target: :id,
            update: {
              name: Sequel[:excluded][:name],
              email: Sequel[:excluded][:email],
              sub: Sequel[:excluded][:sub]
            }
          ).insert({
            id: row.fetch(:people_id),
            name: Faker::Name.name,
            email: Faker::Internet.email,
            sub: Faker::Internet.uuid
          })

          to_connection[:matters].insert_conflict(
            target: :name,
            update: {
              matter_template_id: Sequel[:excluded][:matter_template_id],
              primary_contact_id: Sequel[:excluded][:primary_contact_id],
              description: Sequel[:excluded][:description],
              slug: Sequel[:excluded][:slug]
            }
          ).insert({
            name: "#{row.fetch(:matter_templates_name)} Matter",
            matter_template_id: row.fetch(:matter_template_id),
            description: JSON.generate({
              body: Faker::Lorem.paragraphs(number: 3)
            }),
            primary_contact_id: row.fetch(:primary_contact_id)
          })
        end
      end

      private

      attr_reader :from_connection, :to_connection

      def from_dataset
        @_from_dataset ||= from_connection[:matters].graph(
          :people,
          id: :primary_contact_id
        ).graph(
          :matter_templates,
          id: Sequel[:matters][:matter_template_id]
        )
      end
    end
  end
end
