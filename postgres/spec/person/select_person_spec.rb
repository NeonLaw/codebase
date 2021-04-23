RSpec.describe "select from person" do
  let(:connection) { NeonPostgres::Database.connection }
  let(:people) { connection[:person] }

  context "with no people" do
    before { people.delete }

    it "returns an empty collection" do
      expect(people.all.count).to eq 0
    end
  end
end
