require "neon_secrets"

module NeonSlack
  module Operations
    class Messenger < NeonOperations::Operation
      def initialize(
        input:,
        schema_contract: NeonSchemas::Contracts::Slack::SendMessageContract,
        slack_operation: NeonSlack::Operations::SlackMessenger
      )
        @input = input
        @schema_contract = schema_contract
        @slack_operation = slack_operation
      end

      def call
        validate_input.bind do |validated_input|
          slack_operation.call(
            input: {
              message: validated_input[:message],
              channel: validated_input[:channel]
            }
          )
        end
      end

      private

      attr_reader :slack_operation
    end
  end
end
