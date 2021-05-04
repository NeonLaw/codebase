require "sequel"

module NeonPostgres
  class Database
    def self.connection
      @_connection ||= Sequel.connect(
        ENV.fetch("DATABASE_URL") {
          "postgres://postgres:password@localhost:5432/neon_law"
        }
      )
    end

    def self.anonymous_connection
      @_anonymous_connection ||= Sequel.connect(
        ENV.fetch("DATABASE_URL") {
          "postgres://postgres:password@localhost:5432/neon_law"
        },
        connect_sqls: [
          "SET role = 'anonymous';"
        ]
      )
    end

    def self.portal_connection(user_id:)
      @_portal_connection ||= Sequel.connect(
        ENV.fetch("DATABASE_URL") {
          "postgres://postgres:password@localhost:5432/neon_law"
        },
        connect_sqls: [
          "SET role = 'portal';",
          "SET \"person.id\" = '#{user_id}';"
        ]
      )
    end

    def self.lawyer_connection(user_id:)
      @_lawyer_connection ||= Sequel.connect(
        ENV.fetch("DATABASE_URL") {
          "postgres://postgres:password@localhost:5432/neon_law"
        },
        connect_sqls: [
          "SET role = 'lawyer';",
          "SET \"person.id\" = '#{user_id}';"
        ]
      )
    end

    def self.admin_connection(user_id:)
      @_admin_connection ||= Sequel.connect(
        ENV.fetch("DATABASE_URL") {
          "postgres://postgres:password@localhost:5432/neon_law"
        },
        connect_sqls: [
          "SET role = 'admin';",
          "SET \"person.id\" = '#{user_id}';"
        ]
      )
    end

    def self.from_connection
      @_from_connection ||= Sequel.connect(
        ENV.fetch("FROM_DATABASE_URL") {
          "postgres://postgres:password@localhost:5432/production"
        }
      )
    end

    def self.to_connection
      @_to_connection ||= Sequel.connect(
        ENV.fetch("TO_DATABASE_URL") {
          "postgres://postgres:password@localhost:5432/staging"
        }
      )
    end
  end
end
