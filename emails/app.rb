require "functions_framework"
require "neon_email"
require "logger"
require "base64"
require "json"

logger = Logger.new($stdout)

FunctionsFramework.cloud_event "outbound_emails.welcome_email" do |event|
  logger.info "hey you!"

  data = JSON.parse(
    Base64.strict_decode64(event.data.fetch("message").fetch("data"))
  )
  to_email = data.fetch("to")

  NeonEmail::GreetingMailer.deliver(to_email: to_email)

  logger.info(data)
end
