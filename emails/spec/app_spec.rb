require "functions_framework"

RSpec.describe "app.rb" do
  context "with a welcome_email event" do
    it "invokes the NeonEmail::Mailer#send_welcome_email" do
      load_temporary "${__dir__}/../app.rb" do
        event = make_cloud_event(
          {yes: "yes"}.to_json,
          type: "com.neon_law.outbound_email.welcome_email"
        )

        expect_any_instance_of(Logger).to(
          receive(:info).with({yes: "yes"}.to_json)
        )

        call_event("com.neon_law.outbound_email.welcome_email", event)
      end
    end
  end
end
