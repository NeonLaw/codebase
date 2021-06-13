require "functions_framework"
require "neon_email"

FunctionsFramework.cloud_event "welcome_email" do |event|
  logger.info event
  logger.info "I received an event of type #{event.type}!"
end
