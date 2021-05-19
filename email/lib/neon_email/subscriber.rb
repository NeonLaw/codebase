require "google/cloud/pubsub"
require "avro"

module NeonEmail
  class Subscriber
    def self.subscribe_to_outbound_email
      subscription = pubsub.subscription "outbound_email"
      subscriber = subscription.listen do |received_message|
        puts "Received message: #{received_message.data}"
        received_message.acknowledge!
        avro_schema = Avro::Schema.parse File.read(avsc_file)
        buffer = StringIO.new received_message.data
        decoder = Avro::IO::BinaryDecoder.new buffer
        reader = Avro::IO::DatumReader.new avro_schema
        message_data = reader.read decoder
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

NeonEmail::Subscriber.subscribe_to_email_topics
