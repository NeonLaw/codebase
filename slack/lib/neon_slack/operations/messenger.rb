require "neon_secrets"

module NeonSlack
  module Operations
    class Messenger
      def initialize(
        input:,
        schema_contract: NeonSchemas::Contracts::Slack::SendMessageContract
      )
        @input = input
        @schema_contract = schema_contract
      end

      def call
        validate_input.bind do |validated_input|
        end
      end
    end
  end
end
