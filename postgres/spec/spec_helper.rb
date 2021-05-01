require "bundler/setup"
require "neon_postgres"
require "pry"
require "faker"
require "fixture_dependencies/rspec/sequel"

Sequel::Model.db = NeonPostgres::Database.connection
class Person < Sequel::Model; end

FixtureDependencies.fixture_path = "#{__dir__}/fixtures"

RSpec.configure do |config|
  # Enable flags like --only-failures and --next-failure
  config.example_status_persistence_file_path = ".rspec_status"

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

    user_id = load(:person__portal_user).id
    Sequel::Model.db.run("SET ROLE 'portal';")
    Sequel::Model.db.run("SET \"person.id\" = '#{user_id}';")
    example.run
  end

  config.around(:each, lawyer: true) do |example|
    seed_data

    user_id = load(:person__lawyer_user).id
    Sequel::Model.db.run("SET ROLE 'lawyer';")
    Sequel::Model.db.run("SET \"person.id\" = '#{user_id}';")
    example.run
  end

  config.around(:each, admin: true) do |example|
    seed_data

    user_id = load(:person__admin_user).id
    Sequel::Model.db.run("SET ROLE 'admin';")
    Sequel::Model.db.run("SET \"person.id\" = '#{user_id}';")
    example.run
  end
end
