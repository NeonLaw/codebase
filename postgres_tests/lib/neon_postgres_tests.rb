require "neon_postgres_tests/version"
require "sequel"

module NeonPostgresTests
  class Error < StandardError; end

  class Database
    def self.connection
      @db ||= Sequel.connect(
        ENV.fetch("DATABASE_URL") {
          "postgres://postgres:password@localhost:5432/neon_law"
        }
      )
    end
  end
end
