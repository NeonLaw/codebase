RSpec.describe NeonSchemas::Contracts::Authentication::SuccessfulLoginContract do
  let(:result) { described_class.new.call(input) }

  context "with correctly formatted input" do
    let(:input) { {email: "nick@neonlaw.com", sub: "yes"} }

    it "returns true" do
      expect(result).to be_a_kind_of Dry::Validation::Result
      expect(result.errors.messages.count).to eq 0
    end
  end

  context "with incorrectly formatted input" do
    let(:input) { {email: "Bob's Burgers"} }

    it "contains errors" do
      expect(result).to be_a_kind_of Dry::Validation::Result
      expect(result.errors.messages.count).to eq 2
      expect(result.errors.messages.flat_map(&:path).sort).to eq %i[email sub]
    end
  end
end
