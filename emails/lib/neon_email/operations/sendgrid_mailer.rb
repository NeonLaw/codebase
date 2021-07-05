require "sendgrid-ruby"
require "neon_secrets"

module NeonEmail
  module Operations
    class SendgridMailer < NeonOperations::Operation
      def initialize(
        input:,
        schema_contract: NeonSchemas::Contracts::OutboundEmails::SendgridMailContract
      )
        @input = input
        @schema_contract = schema_contract
      end

      def call
        validate_input.bind do |validated_input|
          mail = SendGrid::Mail.new
          mail.from = SendGrid::Email.new(email: "support@neonlaw.com", name: "Neon Law")
          mail.add_content(
            SendGrid::Content.new(
              type: "text/plain",
              value: validated_input[:content]
            )
          )
          mail.subject = validated_input[:subject]
          personalization = SendGrid::Personalization.new
          personalization.add_to(SendGrid::Email.new(email: validated_input[:to]))

          mail.add_personalization(personalization)

          request = sendgrid_client.mail._("send").post(request_body: mail.to_json)

          if request.status_code.to_i == 202
            Success(request)
          else
            Failure(request)
          end
        end
      end

      private

      def sendgrid_client
        @_sendgrid_client ||= SendGrid::API.new(
          api_key: NeonSecrets::Getter.get(
            secret_name: "sendgrid_api_key",
            gcp_secret_name: "emails"
          )
        ).client
      end
    end
  end
end
