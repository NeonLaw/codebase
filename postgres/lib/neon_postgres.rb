require "sequel"

require "neon_postgres/version"
require "neon_postgres/database"
require "neon_postgres/document_sanitizer"
require "neon_postgres/sequel_models"
Dir["#{__dir__}/neon_postgres/inter_database_copy/*"].sort.each { |file|
  next if /copy.rb$/.match?(file)
  require file
}

module NeonPostgres
  class Error < StandardError; end
end
