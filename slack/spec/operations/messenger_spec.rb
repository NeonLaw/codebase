RSpec.describe NeonSlack::Operations::Messenger do
  subject { described_class.new(input: input, slack_operation: slack) }
  let(:slack) { class_double(NeonSlack::Operations::SlackMessenger) }

  describe ".call" do
    context "with valid data" do
      let(:message) { Faker::Lorem.paragraph }
      let(:input) { {message: message, channel: "devops"} }

      context "with a successful SlackMessenger#call monad" do
        it "runs successfully" do
          expect(slack).to receive(:call).and_return(Success(input))

          expect(subject.call.success?).to be true
        end
      end

      context "with a unsuccessful Sendgrid#call monad" do
        it "runs unsuccessfully" do
          expect(slack).to receive(:call).and_return(Failure("error"))

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
