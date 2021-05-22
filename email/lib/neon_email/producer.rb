require "google/cloud/pubsub"
require "avro"

module NeonEmail
  class Producer
    def self.produce_outbound_email
      pubsub = Google::Cloud::PubSub.new(
        project_id: "neon-law-staging",
        credentials: "#{__dir__}/../../../neon-law-staging.credentials.json"
      )

      # Retrieve a topic
      topic = pubsub.topic "outbound_email"

      avro_schema = Avro::Schema.parse(
        File.read("#{__dir__}/../../../schemas/src/outbound_email.avsc")
      )
      record = {
        email: "hello@rar",
        email_type: {
          template: "new_registration",
          sub: "rar"
        }
      }
      writer = Avro::IO::DatumWriter.new avro_schema
      buffer = StringIO.new
      encoder = Avro::IO::BinaryEncoder.new buffer

      writer.write record, encoder

      # Publish a new message
      topic.publish buffer
    end
  rescue SignalException => e
    puts "Received Signal #{e}"
    exit
  end
end

NeonEmail::Producer.produce_outbound_email
