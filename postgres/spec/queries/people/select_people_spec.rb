RSpec.describe "select from people;" do
  let(:connection) { NeonPostgres::Database.connection }
  let(:seed_data) { load(:people) }

  context "with no session" do
    it "returns all three people" do
      seed_data
      expect(connection[:people].all.count).to eq 3
    end
  end

  context "as an anonymous user", :anonymous do
    it "denies access to the person table" do
      expect { Person.all }.to raise_error(
        Sequel::DatabaseError,
        /(PG::InsufficientPrivilege).*(permission denied for table people)/
      )
    end
  end

  context "as a portal user", :portal do
    let(:portal_user) { load(:person__portal_user) }

    it "returns the current person" do
      expect(Person.all).to eq [portal_user]
    end
  end

  context "as a lawyer user", :lawyer do
    let(:lawyer_user) { load(:person__lawyer_user) }

    it "returns the current person" do
      expect(Person.all).to eq [lawyer_user]
    end
  end

  context "as an admin user", :admin do
    let(:admin_user) { load(:person__admin_user) }

    it "loads all the people" do
      expect(Person.all.count).to eq 3
      expect(Person.all).to include admin_user
    end
  end
end
