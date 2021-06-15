RSpec.describe "app.rb" do
  context "with a welcome_email event" do
    it "invokes the NeonEmail::Mailer#send_welcome_email" do
      load_temporary "${__dir__}/../app.rb" do
        message = {"yes" => "yes"}

        data = {
          "message": {
            "data": Base64.encode64(message.to_json).strip
          }
        }

        event = make_cloud_event(
          JSON.parse(data.to_json),
          type: "com.neon_law.outbound_email.welcome_email"
        )

        allow_any_instance_of(Logger).to receive(:info).with("hey you!")
        expect_any_instance_of(Logger).to receive(:info).with(message)

        call_event("com.neon_law.outbound_email.welcome_email", event)
      end
    end
  end
end
