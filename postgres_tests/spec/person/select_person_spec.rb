RSpec.describe "select from person" do
  let(:connection) { NeonPostgresTests::Database.connection }

  context "with no people" do
    it "returns an empty collection" do
      people = connection[:person]

      expect(people.all.count).to eq 0
    end
  end
end
