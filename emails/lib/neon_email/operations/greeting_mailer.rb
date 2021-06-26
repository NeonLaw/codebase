require "neon_schemas"
require_relative "./sendgrid_mailer"

module NeonEmail
  module Operations
    class GreetingMailer
      def self.call(input:)
        new(input: input).call
      end

      def initialize(
        input:,
        schema_contract: NeonSchemas::Contracts::OutboundEmails::WelcomeEmailContract,
        mailer_operation: NeonEmail::Operations::SendgridMailer
      )
        @input = input
        @schema_contract = schema_contract
      end

      def call
        validate_input.bind do |validated_input|
          mailer_operation.run(
            from: "support@neonlaw.com",
            to: validated_input.fetch("to"),
            subject: "Welcome to Neon Law!",
            content: "Welcome, please email us if you have any questions."
          )
        end
      end

      private

      attr_reader :input, :schema_contract

      def validate_input
        schema_contract.validate(data)
      end
    end
  end
end
