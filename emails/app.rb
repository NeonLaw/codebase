require "functions_framework"
require "neon_email"
require "neon_operations"

FunctionsFramework.cloud_event "outbound_emails.welcome_email" do |event|
  NeonOperations::GCPFunctionsManager.invoke_operation(
    NeonEmail::Operations::GreetingMailer,
    event
  )
end
