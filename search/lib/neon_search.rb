require "neon_search/version"

module NeonSearch
  class Error < StandardError; end

  class QuestionUpserter
    def self.upsert(questions)
      new(questions: questions).upsert
    end

    def initialize(questions:)
      @questions = questions
    end

    def upsert
    end

    private

    attr_reader :questions
  end
end
