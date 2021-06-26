require "dry/monads"
require "neon_email/version"
Dir["#{__dir__}/neon_email/operations/**/*.rb"].sort.each { |f| require f }

module NeonEmail
end
