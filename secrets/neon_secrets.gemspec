require_relative "lib/neon_secrets/version"

Gem::Specification.new do |spec|
  spec.name = "neon_secrets"
  spec.version = NeonSecrets::VERSION
  spec.authors = ["Neon Law"]
  spec.email = ["support@neonlaw.com"]

  spec.summary = "A gem to handle secrets in the Neon Law software space."
  spec.description = spec.summary
  spec.homepage = "https://github.com/neonlaw/codebase"
  spec.required_ruby_version = Gem::Requirement.new(">= 2.3.0")

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = spec.homepage
  spec.metadata["changelog_uri"] = spec.homepage

  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem that have been added into git.
  spec.files = Dir.chdir(File.expand_path("..", __FILE__)) do
    `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  end
  spec.require_paths = ["lib"]

  spec.add_runtime_dependency "google-cloud-secret_manager", "~> 1.1"
end
