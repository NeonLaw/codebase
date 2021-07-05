RSpec.describe NeonEmail::Operations::SendgridMailer do
  subject { described_class.new(input: input) }

  describe ".call" do
    context "with valid data" do
      let(:email) { "nick@sink.sendgrid.com" }
      let(:input) { {to: email, from: "support@neonlaw.com", subject: "hey", content: "hey"} }

      it "runs successfully" do
        expect(subject.call.success?).to be true
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
