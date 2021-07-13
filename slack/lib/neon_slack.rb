require "neon_schemas"
require "neon_operations"
require "neon_slack/version"
Dir["#{__dir__}/neon_slack/operations/**/*.rb"].sort.each { |f| require f }

module NeonSlack
end
