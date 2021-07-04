require_relative "./sendgrid_mailer"

module NeonEmail
  module Operations
    class GreetingMailer < NeonOperations::Operation
      def initialize(
        input:,
        schema_contract: NeonSchemas::Contracts::OutboundEmails::WelcomeEmailContract.new,
        mailer_operation: NeonEmail::Operations::SendgridMailer.new
      )
        @input = input
        @schema_contract = schema_contract
      end

      def call
        Success(validate_input).bind do |validated_input|
          mailer_operation.call(
            from: "support@neonlaw.com",
            to: validated_input.fetch("to"),
            subject: "Welcome to Neon Law!",
            content: "Welcome, please email us if you have any questions."
          )
        end
      end
    end
  end
end
