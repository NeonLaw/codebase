require "functions_framework"
require "neon_slack"
require "neon_operations"

FunctionsFramework.cloud_event "slack.send_message" do |event|
  NeonOperations::GCPFunctionsManager.invoke_operation(
    NeonSlack::Operations::Messenger,
    event
  )
end
