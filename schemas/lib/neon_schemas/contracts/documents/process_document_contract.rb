require "dry-validation"

module NeonSchemas::Contracts::Documents
  class ProcessDocumentContract < Dry::Validation::Contract
    json do
      required(:filename).filled(:string)
    end
  end
end
