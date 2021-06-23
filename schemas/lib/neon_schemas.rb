require "neon_schemas/version"
require "neon_schemas/avro"
Dir["#{__dir__}/neon_schemas/contracts/**/*.rb"].sort.each { |f| require f }

module NeonSchemas
  module Contracts; end

  class Error < StandardError; end
end
