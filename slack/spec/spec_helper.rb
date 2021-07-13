require "bundler/setup"
require "neon_slack"
require "pry"
require "faker"
require "functions_framework/testing"
require "functions_framework"
require "base64"
require "dry/monads"

RSpec.configure do |config|
  config.include FunctionsFramework::Testing
  config.include Dry::Monads[:result]
  config.disable_monkey_patching!

  config.expect_with :rspec do |c|
    c.syntax = :expect
  end
end
