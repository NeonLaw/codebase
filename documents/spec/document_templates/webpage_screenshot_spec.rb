RSpec.describe NeonDocuments::DocumentTemplates::WebpageScreenshot do
  subject {
    described_class.processed_filename(
      unprocessed_filename: unprocessed_filename
    )
  }

  context "with valid URLs" do
    let(:unprocessed_filename) { "https://www.google.com" }

    it "converts google.com to a safe filename" do
      expect(subject).to eq "https___www_google_com"
    end
  end
end
