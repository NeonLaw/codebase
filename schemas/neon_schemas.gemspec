require_relative "lib/neon_schemas/version"

Gem::Specification.new do |spec|
  spec.name = "neon_schemas"
  spec.version = NeonSchemas::VERSION
  spec.authors = ["Neon Law"]
  spec.email = ["support@neonlaw.com"]

  spec.summary = "A gem containing schemas and encoding/decoding Avro classes"
  spec.description = spec.summary
  spec.homepage = "https://github.com/neonlaw/codebase"
  spec.required_ruby_version = Gem::Requirement.new(">= 2.3.0")

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = spec.homepage
  spec.metadata["changelog_uri"] = spec.homepage

  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem that have been added into git.
  spec.files = Dir.chdir(File.expand_path(__dir__)) do
    `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  end
  spec.require_paths = ["lib"]

  spec.add_runtime_dependency "avro", "~> 1.10"
  spec.add_runtime_dependency "dry-validation", "1.6"
  spec.add_runtime_dependency "neon_operations", "0.0.1"

  spec.add_development_dependency "guard", "2.17.0"
  spec.add_development_dependency "guard-rspec", "4.7.3"
  spec.add_development_dependency "simplecov", "0.21.2"
end
