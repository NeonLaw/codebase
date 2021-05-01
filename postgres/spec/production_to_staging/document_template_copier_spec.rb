RSpec.describe NeonPostgres::ProductionToStaging::DocumentTemplateCopier do
  subject {
    described_class.new(
      production_connection: production_connection,
      staging_connection: staging_connection
    )
  }

  describe "copy" do
    it "copies document templates to the staging environment" do
    end
  end
end
