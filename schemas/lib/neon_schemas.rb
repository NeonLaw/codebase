require "neon_schemas/version"
require "avro"

module NeonSchemas
  class Error < StandardError; end

  class Avro
    SCHEMA_DIRECTORY = "#{__dir__}/../schemas"

    def self.encode(record:, schema_name:)
      avro_schema = ::Avro::Schema.parse(
        File.read("#{SCHEMA_DIRECTORY}/#{schema_name}.avsc")
      )
      writer = ::Avro::IO::DatumWriter.new avro_schema
      buffer = ::StringIO.new
      encoder = ::Avro::IO::BinaryEncoder.new buffer

      writer.write record, encoder

      buffer
    end

    def self.decode(string:, schema_name:)
      avro_schema = ::Avro::Schema.parse(
        File.read("#{SCHEMA_DIRECTORY}/#{schema_name}.avsc")
      )
      buffer = ::StringIO.new string
      decoder = ::Avro::IO::BinaryDecoder.new buffer
      reader = ::Avro::IO::DatumReader.new avro_schema

      json = reader.read(decoder).to_json

      JSON.parse(json, symbolize_names: true)
    end
  end
end
