require "dry-validation"

module NeonSchemas::Contracts::OutboundEmails
  class SendgridMailContract < Dry::Validation::Contract
    json do
      required(:from).filled(:string)
      required(:to).filled(:string)
      required(:subject).filled(:string)
      required(:content).filled(:string)
    end

    rule(:from) do
      if value != "support@neonlaw.com"
        key.failure("emails must come from support@neonlaw.com")
      end
    end

    rule(:to) do
      email_regex = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

      if email_regex.match?(value) == false
        key.failure("has invalid format")
      end
    end
  end
end
