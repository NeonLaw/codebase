require "kafka"

module NeonLaw
  class Producer
    def self.produce_greeting
      kafka = Kafka.new(["localhost:9092"])
      kafka.deliver_message("Hello, World!", topic: "greetings")
    end
  end
end

NeonLaw::Producer.produce_greeting
