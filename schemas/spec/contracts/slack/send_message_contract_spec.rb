RSpec.describe NeonSchemas::Contracts::Slack::SendMessageContract do
  let(:result) { described_class.new.call(input) }

  context "with correctly formatted input" do
    let(:input) { {message: "Hey There", channel: "devops"} }

    it "returns true" do
      expect(result).to be_a_kind_of Dry::Validation::Result
      expect(result.errors.messages.count).to eq 0
    end
  end

  context "with incorrectly formatted input" do
    let(:input) { {message: "Hey There", channel: "general"} }

    it "contains errors" do
      expect(result).to be_a_kind_of Dry::Validation::Result
      expect(result.errors.messages.count).to eq 1
      expect(result.errors.messages.first.path).to eq %i[channel]
    end
  end
end
