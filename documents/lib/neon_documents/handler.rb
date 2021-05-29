require "functions_framework"

FunctionsFramework.cloud_event "neon_law.unprocessed_document" do |event|
  FunctionsFramework.logger.info "I received an event of type #{event.type}!"
end
