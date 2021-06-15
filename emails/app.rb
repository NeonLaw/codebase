require "functions_framework"
require "neon_email"
require "logger"
require "base64"
require "json"

logger = Logger.new($stdout)

WELCOME_EMAIL_TOPIC = "com.neon_law.outbound_email.welcome_email".freeze

FunctionsFramework.cloud_event WELCOME_EMAIL_TOPIC do |event|
  data = JSON.parse(
    Base64.strict_decode64(event.data.fetch(:message).fetch(:data))
  )

  logger.info(data)
end
