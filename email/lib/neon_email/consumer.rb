require "kafka"

module NeonLaw
  class Consumer
    def self.consume_messages
      kafka = Kafka.new(["localhost:9092"])

      # Consumers with the same group id will form a Consumer Group together.
      consumer = kafka.consumer(group_id: "email")

      # It's possible to subscribe to multiple topics by calling `subscribe`
      # repeatedly.
      consumer.subscribe("greetings")

      # Stop the consumer when the SIGTERM signal is sent to the process.
      # It's better to shut down gracefully than to kill the process.
      trap("TERM") { consumer.stop }

      # This will loop indefinitely, yielding each message in turn.
      consumer.each_message do |message|
        puts message.topic, message.partition
        puts message.offset, message.key, message.value
      end
    end
  end
end

NeonLaw::Consumer.consume_messages
