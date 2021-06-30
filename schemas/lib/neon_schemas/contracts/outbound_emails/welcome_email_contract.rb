require 'dry-validation'

module NeonSchemas::Contracts::OutboundEmails
  class WelcomeEmailContract < Dry::Validation::Contract
    json do
      required(:email).filled(:string)
      required(:sub).value(:string)
    end

    rule(:email) do
      email_regex = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

      return if email_regex.match?(value)

      key.failure('has invalid format')
    end
  end
end
