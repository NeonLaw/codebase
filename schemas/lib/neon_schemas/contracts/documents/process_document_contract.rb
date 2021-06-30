require 'dry-validation'

module NeonSchemas::Contracts::Documents
  class ProcessDocumentContract < Dry::Validation::Contract
    json do
      required(:email).filled(:string)
      required(:sub).value(:string)
    end

    rule(:email) do
      return if EMAIL_REGEX.match?(value)

      key.failure('has invalid format')
    end
  end
end
