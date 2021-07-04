RSpec.describe NeonEmail::Operations::GreetingMailer do
  subject { described_class.new(input: input, mailer_operation: sendgrid) }
  let(:sendgrid) { class_double(NeonEmail::Operations::SendgridMailer) }

  describe ".call" do
    context "with valid data" do
      let(:email) { Faker::Internet.email }
      let(:input) { {email: email} }

      context "with a successful Sendgrid#send_email monad" do
        it "runs successfully" do
          expect(sendgrid).to receive(:call).and_return(Success(email))

          expect(subject.call.success?).to be true
        end
      end

      context "with a unsuccessful Sendgrid#send_email monad" do
        it "runs unsuccessfully" do
          expect(sendgrid).to receive(:call).and_return(Failure("error"))

          expect(subject.call.success?).to be false
        end
      end
    end

    context "with invalid data" do
      let(:email) { Faker::Internet.email }
      let(:input) { {to: email} }

      it "runs unsuccessfully" do
        expect(subject.call.success?).to be false
      end
    end
  end
end
