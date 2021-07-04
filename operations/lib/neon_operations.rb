require "dry/monads"
require "neon_operations/version"

module NeonOperations
  class GCPFunctionsManager
    def self.invoke_operation(operation, gcp_functions_event)
      data = JSON.parse(
        Base64.strict_decode64(
          gcp_functions_event.data.fetch("message").fetch("data")
        )
      )

      operation.call(input: data)
    end
  end

  class Operation
    include Dry::Monads[:maybe, :result]

    def self.call(input:)
      new(input: input).call
    end

    def initialize(input:, schema_contract: nil)
      @input = input
      @schema_contract = schema_contract
    end

    def call
      validate_input
    end

    private

    attr_reader :input, :schema_contract

    def validate_input
      validation_result = schema_contract.call(input)

      return Failure(validation_result) if validation_result.errors.any?

      Success(validate_result)
    end
  end
end
