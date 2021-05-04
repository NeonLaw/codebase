RSpec.describe NeonPostgres::InterDatabaseCopy::MatterCopier do
  subject {
    described_class.new(
      from_connection: from_connection,
      to_connection: to_connection
    )
  }
  let(:from_connection) { NeonPostgres::Database.connection }
  let(:to_connection) { NeonPostgres::Database.to_connection }
  before { load(:matters) }

  describe "copy" do
    before { to_connection[:matters].delete }

    it "copies document templates to the staging environment" do
      expect(to_connection[:matters].all.count).to eq 0
      subject.copy
      expect(to_connection[:matters].all.count).to eq 2
    end
  end
end
