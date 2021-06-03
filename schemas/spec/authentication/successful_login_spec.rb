RSpec.describe "authentication/successful_login schema" do
  subject { NeonSchemas::Avro }
  let(:schema_name) { "authentication/successful_login" }

  describe "encode" do
    context "with a valid successful_login message in hash format" do
      let(:record) {
        {
          email: "hello@rar",
          sub: "rar"
        }
      }
      let(:encoded) {
        subject.encode(record: record, schema_name: schema_name)
      }

      it "returns Avro formatted binary" do
        expect(encoded).to be_a_kind_of StringIO
        expect(encoded.string).to eq("\u0012hello@rar\u0006rar")
      end
    end
  end

  describe "decode" do
    context "with a valid successful_login message in binary format" do
      let(:string) { "\x12hello@rar rar" }
      let(:decoded) {
        subject.decode(string: string, schema_name: schema_name)
      }

      it "returns a ruby hash" do
        expect(decoded).to be_a_kind_of Hash
        expect(decoded).to eq({
          email: "hello@rar",
          sub: "rar"
        })
      end
    end
  end
end
