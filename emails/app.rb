require "functions_framework"
require "neon_email"
require 'logger'

logger = Logger.new(STDOUT)

FunctionsFramework.cloud_event "neon_law.welcome_email" do |event|
  logger.info event
end
