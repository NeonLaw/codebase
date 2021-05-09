module NeonDocuments
  module DocumentTemplates
    class WebpageScreenshot
      def self.processed_filename(unprocessed_filename:)
        unprocessed_filename
          .gsub(/:\/\//, "___")
          .tr(".", "_")
      end
    end
  end
end
