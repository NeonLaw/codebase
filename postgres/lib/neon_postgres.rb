require "neon_postgres/version"
require "sequel"

module NeonPostgres
  class Error < StandardError; end

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
  end
end
