require "google/cloud/pubsub"
require "neon_schemas"

module NeonEmail
  class Producer
    def self.produce_outbound_email
      Google::Cloud::PubSub.configure do |config|
        config.project_id = ENV.fetch("GCP_PROJECT_ID")
        config.credentials = JSON.parse(ENV.fetch("GCP_CREDENTIALS"))
      end

      pubsub = Google::Cloud::PubSub.new

      # Retrieve a topic
      topic = pubsub.topic "outbound_email"

      record = {
        email: "hello@rar",
        email_type: {
          template: "new_registration",
          sub: "rar"
        }
      }

      encoded_message = NeonSchemas::Avro.encode(
        record: record,
        schema_name: "outbound_email"
      )

      # Publish a new message
      topic.publish encoded_message
    rescue SignalException => e
      puts "Received Signal #{e}"
      exit
    end
  end
end

NeonEmail::Producer.produce_outbound_email
