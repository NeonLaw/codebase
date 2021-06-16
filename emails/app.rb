require "functions_framework"
require "neon_email"
require "logger"
require "base64"
require "json"

logger = Logger.new($stdout)

FunctionsFramework.cloud_event "outbound_emails.welcome_email" do |event|
  data = JSON.parse(
    Base64.strict_decode64(event.data.fetch("message").fetch("data"))
  )
  to = data.fetch("to")
  sub = data.fetch("sub")

  logger.info(data)
end
