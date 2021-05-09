require "neon_documents/version"
require "neon_documents/consumer"
require "neon_documents/document_processor"
Dir["#{__dir__}/neon_documents/document_templates/*"].sort.each { |file|
  require file
}

module NeonDocuments
  class Error < StandardError; end
end
