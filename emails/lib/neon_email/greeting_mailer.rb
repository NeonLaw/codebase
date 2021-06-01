require "sendgrid-ruby"
# require "neon_secrets"

module NeonEmail
  class GreetingMailer
    include SendGrid

    def self.deliver(message:)
      new(message: message).deliver
    end

    def initialize(message:)
      @message = message
    end

    def deliver
      from = SendGrid::Email.new(email: "test@example.com")
      to = SendGrid::Email.new(email: "test@example.com")
      subject = "Sending with Twilio SendGrid is Fun"
      content = SendGrid::Content.new(type: "text/plain", value: message)
      mail = SendGrid::Mail.new(from, subject, to, content)

      sg = SendGrid::API.new(api_key: ENV["SENDGRID_API_KEY"])
      # sg = SendGrid::API.new(api_key: NeonSecrets::Getter.get(secret_name: "sendgrid_api_key"))
      response = sg.client.mail._("send").post(request_body: mail.to_json)

      puts response
    end

    private

    attr_reader :message
  end
end
