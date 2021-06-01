RSpec.describe NeonSecrets::Getter do
  subject { described_class }

  describe ".get" do
    context "with neon_env set to development" do
      before {
        allow(ENV).to receive(:fetch).with("NEON_ENV").and_return("development")
      }

      context "with a set environment variable" do
        it "returns the environment variable" do
          expect(ENV).to receive(:fetch).with("SAMPLE").and_return("yes")
          expect(subject.get(secret_name: "sample")).to eq "yes"
        end
      end
    end
  end
end
