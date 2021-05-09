module NeonDocuments
  module DocumentTemplates
    class WebpageScreenshot
      def self.processed_filename(unprocessed_filename:)
        unprocessed_filename
          .gsub(/\:\/\//, '___')
          .gsub(/\./, '_')
      end
    end
  end
end
