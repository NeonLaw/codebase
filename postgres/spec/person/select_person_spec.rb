RSpec.describe "select from person" do
  let(:connection) { NeonPostgres::Database.connection }
  let(:people) { connection[:person] }

  context "with no people" do
    it "returns an empty collection" do
      expect(people.all.count).to eq 0
    end
  end

  context "as an anonymous user" do
    let(:anonymous_connection) { NeonPostgres::Database.anonymous_connection }

    it "denies access to the person table" do
      expect { anonymous_connection[:person].all.count }.to raise_error(
        Sequel::DatabaseError,
        /(PG::InsufficientPrivilege).*(permission denied for table person)/
      )
    end
  end
end
