require "neon_schemas/version"

module NeonSchemas
  module Contracts; end

  class Error < StandardError; end
end

require "neon_schemas/avro"
Dir["#{__dir__}/neon_schemas/contracts/**/*.rb"].sort.each { |f| require f }
