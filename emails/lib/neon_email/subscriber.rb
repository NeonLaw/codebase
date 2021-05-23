require "google/cloud/pubsub"
require "neon_schemas"

module NeonEmail
  class Subscriber
    def self.subscribe_to_outbound_email
      Google::Cloud::PubSub.configure do |config|
        config.project_id = ENV.fetch("GCP_PROJECT_ID")
        config.credentials = JSON.parse(ENV.fetch("GCP_CREDENTIALS"))
      end

      pubsub = Google::Cloud::PubSub.new

      subscription = pubsub.subscription "outbound_email"
      subscriber = subscription.listen do |received_message|
        puts received_message
        message_data = NeonSchemas::Avro.decode(
          string: received_message.data,
          schema_name: "outbound_email"
        )

        puts "Received a binary-encoded message:\n#{message_data}"

        received_message.acknowledge!
      end

      subscriber.start

      puts "subscribing to outbound_email"

      # Sleep indefinitely for the child processes to run
      sleep
    rescue SignalException => e
      subscriber.stop.wait!
      puts "Received Signal #{e} shutting down the subscriber"
      exit
    end
  end
end

NeonEmail::Subscriber.subscribe_to_outbound_email
