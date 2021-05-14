RSpec.describe NeonPostgres::InterDatabaseCopy::MatterTemplateCopier do
  subject {
    described_class.new(
      from_connection: from_connection,
      to_connection: to_connection
    )
  }
  let(:from_connection) { NeonPostgres::Database.connection }
  let(:to_connection) { NeonPostgres::Database.to_connection }
  before { load(:matter_templates) }

  describe "copy" do
    before {
      to_connection[:matter_documents].delete

      to_connection[:documents].delete
      to_connection[:document_templates].delete

      to_connection[:matters].delete

      to_connection[:matter_templates].delete
      to_connection[:people].delete
    }

    it "copies matter templates to the staging environment" do
      expect(to_connection[:matter_templates].all.count).to eq 0
      subject.copy
      expect(to_connection[:matter_templates].all.count).to eq 3
    end
  end
end
