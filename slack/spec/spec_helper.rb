require "bundler/setup"
require "neon_slack"
require "pry"
require "faker"
require "functions_framework/testing"
require "functions_framework"
require "base64"

RSpec.configure do |config|
  config.include FunctionsFramework::Testing
  # Enable flags like --only-failures and --next-failure
  config.example_status_persistence_file_path = ".rspec_status"

  # Disable RSpec exposing methods globally on `Module` and `main`
  config.disable_monkey_patching!

  config.expect_with :rspec do |c|
    c.syntax = :expect
  end
end
