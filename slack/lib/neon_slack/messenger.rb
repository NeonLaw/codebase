require "neon_secrets"

module NeonSlack
  class Messenger
    def self.send_message(message:, channel:)
      new(message: message, channel: channel).send_message
    end

    def initialize(message:, channel:)
      @message = message
      @channel = channel
    end

    def send_message
      puts response
    end

    private

    attr_reader :message, :channel
  end
end
