require "sendgrid-ruby"
require "neon_secrets"

module NeonEmail
  module Operations
    class SendgridMailer < NeonOperations::Operation
      def initialize(
        input:,
        schema_contract: NeonSchemas::Contracts::OutboundEmails::SendgridMailContract,
        mailer_operation: NeonEmail::Operations::SendgridMailer
      )
        @input = input
        @schema_contract = schema_contract
      end

      def call
        validate_input.bind do |validated_input|
          from_email = SendGrid::Email.new(email: "support@neonlaw.com")
          to_email = SendGrid::Email.new(email: validated_input[:to])
          sendgrid_content = SendGrid::Content.new(
            type: "text/plain",
            value: content
          )
          SendGrid::Mail.new(from_email, subject, to_email, sendgrid_content)

          Success
        end
      rescue
        Failure("there was a Sendgrid error")
      end

      private

      attr_reader :to, :from, :subject, :content

      def sendgrid_api_key
        @_sendgrid_api_key ||= SendGrid::API.new(
          api_key: NeonSecrets::Getter.get(secret_name: "sendgrid_api_key")
        )
      end
    end
  end
end
