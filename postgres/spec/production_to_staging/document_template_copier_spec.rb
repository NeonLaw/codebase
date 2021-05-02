RSpec.describe NeonPostgres::ProductionToStaging::DocumentTemplateCopier do
  subject {
    described_class.new(
      production_connection: production_connection,
      staging_connection: staging_connection
    )
  }
  let(:production_connection) { NeonPostgres::Database.connection }
  let(:staging_connection) { NeonPostgres::Database.staging_connection }
  before { load(:document_templates) }

  describe "copy" do
    before { staging_connection[:document_templates].delete }

    it "copies document templates to the staging environment" do
      expect(staging_connection[:document_templates].all.count).to eq 0
      subject.copy
      expect(staging_connection[:document_templates].all.count).to eq 2
    end
  end
end
