RSpec.describe NeonSchemas::Contracts do
  let(:schema_files) { Dir["#{__dir__}/../schemas/**/*.avsc"] }
  let(:ruby_contract_folder) { "#{__dir__}/../lib/neon_schemas/contracts" }

  it "has a dry-validation contract for every Avro schema" do
    schema_files.each do |file|
      avro_filename = file.gsub(/.*schemas\//, "")
      ruby_contract_filename = avro_filename.gsub(/.avsc$/, "_contract.rb")

      expect(
        File.exist?("#{ruby_contract_folder}/#{ruby_contract_filename}")
      ).to be true
    end
  end
end
