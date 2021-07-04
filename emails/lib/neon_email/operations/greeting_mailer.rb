require_relative "./sendgrid_mailer"

module NeonEmail
  module Operations
    class GreetingMailer < NeonOperations::Operation
      def initialize(
        input:,
        schema_contract: NeonSchemas::Contracts::OutboundEmails::WelcomeEmailContract,
        mailer_operation: NeonEmail::Operations::SendgridMailer
      )
        @input = input
        @schema_contract = schema_contract
        @mailer_operation = mailer_operation
      end

      def call
        validate_input.bind do |validated_input|
          mailer_operation.call(
            input: {
              from: "support@neonlaw.com",
              to: validated_input[:email],
              subject: "Welcome to Neon Law!",
              content: "Welcome, please email us if you have any questions."
            }
          )
        end
      end

      private

      attr_reader :mailer_operation
    end
  end
end
