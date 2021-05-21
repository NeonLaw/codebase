require "roda"
require "neon_webhooks/version"

module NeonWebhooks
  class Error < StandardError; end
  # Your code goes here...

  class App < Roda
    route do |r|
      r.root do
        "ok"
      end
    end
  end
end
