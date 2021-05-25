require "fixture_dependencies/rspec/sequel"

FixtureDependencies.fixture_path = "#{__dir__}/../fixtures"

FixtureDependencies.class_map[:person] = NeonPostgres::Models::Person
FixtureDependencies.class_map[:document] = NeonPostgres::Models::Document
FixtureDependencies.class_map[:document_template] = NeonPostgres::Models::DocumentTemplate
FixtureDependencies.class_map[:matter_template] = NeonPostgres::Models::MatterTemplate
FixtureDependencies.class_map[:matter_document] = NeonPostgres::Models::MatterDocument
FixtureDependencies.class_map[:matter] = NeonPostgres::Models::Matter
