require "dry-validation"

module NeonSchemas
  module Contracts
    class WelcomeEmailContract < Dry::Validation::Contract
      json do
        required(:email).filled(:string)
        required(:sub).value(:string)
      end

      rule(:email) do
        unless /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.match?(value)
          key.failure("has invalid format")
        end
      end

      rule(:sub) do
        key.failure("must be greater than 18") if value <= 18
      end
    end
  end
end
