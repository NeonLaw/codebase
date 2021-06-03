require "roda"
require "neon_webhooks/version"

module NeonWebhooks
  class Error < StandardError; end

  class App < Roda
    plugin :indifferent_params
    plugin :request_headers

    route do |r|
      r.root do
        "ok"
      end

      r.on "/successful-token-exchange" do
        r.post do
          fail unless r.headers.fetch("AUTH0_TOKEN") == ENV.fetch("AUTH0_TOKEN")

          Google::Cloud::PubSub.configure do |config|
            config.project_id = ENV.fetch("GCP_PROJECT_ID")
            config.credentials = JSON.parse(ENV.fetch("GCP_CREDENTIALS"))
          end
          pubsub = Google::Cloud::PubSub.new

          topic = pubsub.topic "authentication/successful_login"

          record = {
            email: params.fetch("email"),
            sub: params.fetch("sub")
          }

          encoded_message = NeonSchemas::Avro.encode(
            record: record,
            schema_name: "authentication/successful_login"
          )

          topic.publish encoded_message

          return "successful login message enqueued"
        end
      end
    end
  end
end
