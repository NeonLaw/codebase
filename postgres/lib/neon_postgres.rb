require "sequel"

require "neon_postgres/version"
require "neon_postgres/database"
Dir["#{__dir__}/neon_postgres/inter_database_copy/*"].sort.each { |file|
  next if /copy.rb$/.match?(file)
  require file
}

module NeonPostgres
  class Error < StandardError; end
end
