RSpec.describe NeonSchemas::Contracts::Documents::ProcessDocumentContract do
  let(:result) { described_class.new.call(input) }

  context "with correctly formatted input" do
    let(:input) { {filename: "Yes.csv"} }

    it "returns true" do
      expect(result).to be_a_kind_of Dry::Validation::Result
      expect(result.errors.messages.count).to eq 0
    end
  end

  context "with incorrectly formatted input" do
    let(:input) { {filename: 1} }

    it "contains errors" do
      expect(result).to be_a_kind_of Dry::Validation::Result
      expect(result.errors.messages.count).to eq 1
      expect(result.errors.messages.first.path).to eq %i[filename]
    end
  end
end
