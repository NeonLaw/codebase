require "neon_secrets/version"

module NeonSecrets
  class Error < StandardError; end

  class Getter
    def self.get(secret_name:)
      new(secret_name: secret_name).secret_value
    end

    def initialize(secret_name:)
      @secret_name = secret_name.upcase
    end

    def secret_value
      if neon_env == "development"
        ENV.fetch(secret_name)
      else
        fail "does not work yet"
      end
    end

    attr_reader :secret_name

    private

    def neon_env
      @_neon_env ||= ENV.fetch("NEON_ENV")
    end
  end
end
