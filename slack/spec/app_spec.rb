RSpec.describe "app.rb" do
  context "with a welcome_email event" do
    it "invokes the NeonSlack::Mailer#send_welcome_email" do
      load_temporary "${__dir__}/../app.rb" do
        message = {"yes" => "yes"}

        data = {
          "message": {
            "data": Base64.encode64(message.to_json).strip
          }
        }

        event = make_cloud_event(
          JSON.parse(data.to_json),
          type: "slack.send_message"
        )

        expect_any_instance_of(Logger).to receive(:info).with(message)

        call_event("slack.send_message", event)
      end
    end
  end
end
