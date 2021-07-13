require "slack-ruby-client"
require "neon_secrets"

module NeonSlack
  module Operations
    class SlackMessenger < NeonOperations::Operation
      def initialize(
        input:,
        schema_contract: NeonSchemas::Contracts::Slack::SendMessageContract
      )
        @input = input
        @schema_contract = schema_contract
      end

      def call
        validate_input.bind do |validated_input|
          slack_client.chat_postMessage(
            channel: validated_input[:channel],
            text: validated_input[:message]
          )
        end
      end

      private

      def slack_client
        @_slack_client ||= Slack::Web::Client.new(
          token: NeonSecrets::Getter.get(
            secret_name: "neon_law_user_access_token",
            gcp_secret_name: "slack"
          ),
          store_scopes: true
        )
      end
    end
  end
end
