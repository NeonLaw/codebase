require 'dry-validation'

module NeonSchemas::Contracts::Slack
  class SendMessageContract < Dry::Validation::Contract
    json do
      required(:message).filled(:string)
      required(:channel).value(:string)
    end

    rule(:channel) do
      return if channel == 'devops'

      key.failure('invalid channel')
    end
  end
end
