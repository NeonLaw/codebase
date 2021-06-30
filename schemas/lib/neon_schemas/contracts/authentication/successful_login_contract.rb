require "dry-validation"

module NeonSchemas
  module Contracts
    module Authentication
      class SuccessfulLoginContract < Dry::Validation::Contract
        json do
          required(:email).filled(:string)
          required(:sub).value(:string)
        end

        rule(:email) do
          return if EMAIL_REGEX.match?(value)

          key.failure("has invalid format")
        end
      end
    end
  end
end
