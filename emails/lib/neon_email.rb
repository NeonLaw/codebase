require "neon_schemas"
require "neon_operations"
require "neon_email/version"
Dir["#{__dir__}/neon_email/operations/**/*.rb"].sort.each { |f| require f }

module NeonEmail
end
