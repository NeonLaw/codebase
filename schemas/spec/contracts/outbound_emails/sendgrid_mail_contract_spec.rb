RSpec.describe NeonSchemas::Contracts::OutboundEmails::SendgridMailContract do
  let(:result) { described_class.new.call(input) }

  context "with correctly formatted input" do
    let(:input) {
      {
        to: "nick@neonlaw.com",
        from: "support@neonlaw.com",
        subject: "Hey There!",
        content: "welcome!"
      }
    }

    it "returns true" do
      expect(result).to be_a_kind_of Dry::Validation::Result
      expect(result.errors.messages.count).to eq 0
    end
  end

  context "with incorrectly formatted input" do
    let(:input) { {to: "nick@neonlaw.com"} }

    it "contains errors" do
      expect(result).to be_a_kind_of Dry::Validation::Result
      expect(result.errors.messages.count).to eq 3
      expect(result.errors.messages.flat_map(&:path).sort).to eq %i[content from subject]
    end
  end
end
