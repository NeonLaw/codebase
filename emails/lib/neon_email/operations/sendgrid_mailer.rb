require "sendgrid-ruby"
require "neon_secrets"

module NeonEmail
  module Operations
    class SendgridMailer
      def self.run(to:, from:, subject:, content:)
        new(to: to, from: from, subject: subject, content: content).run
      end

      def initialize(to:, from:, subject:, content:)
        @to = to
        @from = from
        @subject = subject
        @content = content
      end

      def send_email
        from = SendGrid::Email.new(email: "support@neonlaw.com")
        to = SendGrid::Email.new(email: to_email)
        sendgrid_content = SendGrid::Content.new(
          type: "text/plain",
          value: content
        )
        SendGrid::Mail.new(from, subject, to, sendgrid_content)

        Success
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
