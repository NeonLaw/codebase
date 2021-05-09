require "kafka"

module NeonDocuments
  class Consumer
    def self.consume_messages
      kafka = Kafka.new([ENV.fetch("KAFKA_URL") { "kafka:9092" }])

      # Consumers with the same group id will form a Consumer Group together.
      consumer = kafka.consumer(group_id: "documents")

      # It's possible to subscribe to multiple topics by calling `subscribe`
      # repeatedly.
      consumer.subscribe("process_document")

      # Stop the consumer when the SIGTERM signal is sent to the process.
      # It's better to shut down gracefully than to kill the process.
      trap("TERM") { consumer.stop }

      # This will loop indefinitely, yielding each message in turn.
      consumer.each_message do |message|
        case message.topic
        when "process_document"
          NeonDocument::DocumentProcessor.encode_and_store_document(
            unprocessed_document_id: message.value
          )
        end
      end
    end
  end
end
