require "google/cloud/pubsub"
require "neon_schemas"

module NeonEmail
  class Subscriber
    def self.subscribe_to_outbound_email
      pubsub = Google::Cloud::PubSub.new(
        project_id: ENV.fetch("GCP_PROJECT_ID"),
        credentials: JSON.parse(ENV.fetch("GCP_CREDENTIALS"))
      )

      puts "subscribing to outbound_email"

      subscription = pubsub.subscription "outbound_email"
      subscriber = subscription.listen do |received_message|
        message_data = NeonSchemas::Avro.decode(
          string: received_message.data,
          schema_name: "outbound_email"
        )

        puts "Received a binary-encoded message:\n#{message_data}"

        received_message.acknowledge!
      end

      subscriber.start
      # Let the main thread sleep for 60 seconds so the thread for listening
      # messages does not quit
      sleep 60
      subscriber.stop.wait!
    end
  rescue SignalException => e
    puts "Received Signal #{e}"
    exit
  end
end

NeonEmail::Subscriber.subscribe_to_outbound_email
