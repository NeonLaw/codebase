RSpec.describe NeonSchemas do
  it "has a version number" do
    expect(NeonSchemas::VERSION).not_to be nil
  end
end

RSpec.describe NeonSchemas::Avro do
  subject { described_class }

  describe "encode" do
    context "with a valid outbound email message in hash format" do
      let(:schema_name) { "outbound_email" }
      let(:record) {
        {
          email: "hello@rar",
          email_type: {
            template: "new_registration",
            sub: "rar"
          }
        }
      }
      let(:encoded) {
        subject.encode(record: record, schema_name: schema_name)
      }

      it "returns Avro formatted binary" do
        expect(encoded).to be_a_kind_of StringIO
        expect(encoded.string).to eq(
          "\u0012hello@rar\u0000\u0006rar new_registration"
        )
      end
    end
  end

  describe "decode" do
    context "with a valid outbound email message in binary format" do
      let(:schema_name) { "outbound_email" }
      let(:string) { "\x12hello@rar\x00\x06rar new_registration" }
      let(:decoded) {
        subject.decode(string: string, schema_name: schema_name)
      }

      it "returns a ruby hash" do
        expect(decoded).to be_a_kind_of Hash
        expect(decoded).to eq({
          email: "hello@rar",
          email_type: {
            template: "new_registration",
            sub: "rar"
          }
        })
      end
    end
  end
end
