require "neon_secrets/version"
require "google/cloud/secret_manager"

module NeonSecrets
  class Error < StandardError; end

  class Getter
    def self.get(secret_name:, gcp_secret_name: nil)
      new(
        secret_name: secret_name,
        gcp_secret_name: gcp_secret_name
      ).secret_value
    end

    def initialize(secret_name:, gcp_secret_name:)
      @secret_name = secret_name.upcase
      @gcp_secret_name = gcp_secret_name
    end

    def secret_value
      if neon_env == "development"
        ENV.fetch(secret_name)
      else
        client = Google::Cloud::SecretManager.secret_manager_service
        secret_name = "#{gcp_secret_name}.latest"

        version_path = client.secret_version_path(
          project: "neon-law-#{neon_env.downcase}",
          secret: gcp_secret_name,
          secret_version: "latest"
        )

        secret_values = client.access_secret_version name: version_path

        JSON.parse(secret_values.payload.data).fetch(secret_name)
      end
    end

    attr_reader :secret_name, :gcp_secret_name

    private

    def neon_env
      @_neon_env ||= ENV.fetch("NEON_ENV") { "development" }
    end
  end
end
