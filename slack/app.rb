require "functions_framework"
require "neon_slac"
require "logger"
require "base64"
require "json"

logger = Logger.new($stdout)

FunctionsFramework.cloud_event "slack.send_message" do |event|
  data = JSON.parse(
    Base64.strict_decode64(event.data.fetch("message").fetch("data"))
  )

  logger.info(data)
end
