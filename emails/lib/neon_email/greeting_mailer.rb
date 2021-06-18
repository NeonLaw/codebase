require "sendgrid-ruby"
require "neon_secrets"

module NeonEmail
  class GreetingMailer
    include SendGrid

    def self.deliver(to_email:)
      new(to_email: to_email).deliver
    end

    def initialize(to_email:)
      @to_email = to_email
    end

    def deliver
      from = SendGrid::Email.new(email: "support@neonlaw.com")
      to = SendGrid::Email.new(email: to_email)
      subject = "Welcome to Neon Law!"
      content = SendGrid::Content.new(type: "text/plain", value: "Welcome")
      mail = SendGrid::Mail.new(from, subject, to, content)

      sg = SendGrid::API.new(
        api_key: NeonSecrets::Getter.get(secret_name: "sendgrid_api_key")
      )
      response = sg.client.mail._("send").post(request_body: mail.to_json)

      puts response
    end

    private

    attr_reader :to_email
  end
end
