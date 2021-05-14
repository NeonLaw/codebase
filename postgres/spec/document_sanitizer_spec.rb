RSpec.describe NeonPostgres::DocumentSanitizer do
  before { load(:documents) }
  let!(:document_count) { Document.count }

  subject { described_class }

  describe "sanitize" do
    let(:document) { Document.first }

    it "anonymizes the filename and changes the gcp_url" do
      original_filename = document.filename
      original_gcp_url = document.gcp_url

      described_class.sanitize(document: document.values)

      document.reload

      expect(Document.count).to eq document_count
      expect(document.filename).to_not eq original_filename
      expect(document.gcp_url).to_not eq original_gcp_url
    end
  end
end
