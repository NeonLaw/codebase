require "bundler/setup"
require "neon_postgres"
require "pry"
require "faker"
require_relative "./support/fixture_dependencies"

RSpec.configure do |config|
  # Disable RSpec exposing methods globally on `Module` and `main`
  config.disable_monkey_patching!

  config.expect_with :rspec do |c|
    c.syntax = :expect
  end

  config.around(:each, anonymous: true) do |example|
    seed_data

    Sequel::Model.db.run("SET ROLE 'anonymous';")
    example.run
  end

  config.around(:each, portal: true) do |example|
    seed_data

    Sequel::Model.db.run("SET \"person.id\" = '#{portal_user.id}';")
    Sequel::Model.db.run("SET ROLE 'portal';")
    example.run
  end

  config.around(:each, lawyer: true) do |example|
    seed_data

    Sequel::Model.db.run("SET \"person.id\" = '#{lawyer_user.id}';")
    Sequel::Model.db.run("SET ROLE 'lawyer';")
    example.run
  end

  config.around(:each, admin: true) do |example|
    seed_data

    Sequel::Model.db.run("SET \"person.id\" = '#{admin_user.id}';")
    Sequel::Model.db.run("SET ROLE 'admin';")
    example.run
  end
end
