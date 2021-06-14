require "functions_framework"
require "neon_email"
require "logger"

logger = Logger.new($stdout)

WELCOME_EMAIL_TOPIC = "com.neon_law.outbound_email.welcome_email".freeze

FunctionsFramework.cloud_event WELCOME_EMAIL_TOPIC do |event|
  logger.info event.data
end
