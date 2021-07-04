RSpec.describe NeonEmail::Operations::GreetingMailer do
  subject { described_class }

  describe ".call" do
    context "with valid data" do
      let(:email) { Faker::Internet.email }
      let(:input) { {email: email} }
      let(:sendgrid) { instance_double(NeonEmail::Operations::SendgridMailer) }

      context "with a successful Sendgrid#send_email monad" do
        it "runs successfully" do
          # expect(sendgrid).to receive(:call).with(
          #   {
          #     to: email,
          #     from: "support@neonlaw.com",
          #     subject: "Welcome to Neon Law!",
          #     content: "Welcome, please email us if you have any questions."
          #   }
          # ).and_return(Success(email))

          # expect(subject.call(input: input)).to be_successful
        end
      end

      context "with a unsuccessful Sendgrid#send_email monad" do
        it "runs unsuccessfully" do
          # expect(sendgrid).to receive(:call).with(
          #   {
          #     to: email,
          #     from: "support@neonlaw.com",
          #     subject: "Welcome to Neon Law!",
          #     content: "Welcome, please email us if you have any questions."
          #   }
          # ).and_return(Failure)

          # expect(subject.run(data)).to be_failure
        end
      end
    end

    context "with invalid data" do
      let(:email) { Faker::Internet.email }
      let(:data) { {to: email} }

      it "runs unsuccessfully" do
        # expect(subject.run(data)).to be_failure
      end
    end
  end
end
