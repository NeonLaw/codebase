RSpec.describe "insert into questions;" do
  let(:connection) { NeonPostgres::Database.connection }
  let(:seed_data) { nil }
  let(:prompt) { "How are you?" }
  let(:insert_question) {
    NeonPostgres::Models::Question.insert(
      prompt: prompt,
      question_type: "single-choice"
    )
  }

  context "as an anonymous user", :anonymous do
    it "denies access to the questions table" do
      expect { insert_question }.to raise_error(
        Sequel::DatabaseError,
        /(PG::InsufficientPrivilege).*(permission denied for table questions)/
      )
    end
  end

  context "as a portal user", :portal do
    let(:portal_user) { load(:person__portal_user) }

    it "denies access to the questions table" do
      expect { insert_question }.to raise_error(
        Sequel::DatabaseError,
        /(PG::InsufficientPrivilege).*(permission denied for table questions)/
      )
    end
  end

  context "as a lawyer user", :lawyer do
    let(:lawyer_user) { load(:person__lawyer_user) }

    it "denies access to the questions table" do
      expect { insert_question }.to raise_error(
        Sequel::DatabaseError,
        /(PG::InsufficientPrivilege).*(permission denied for table questions)/
      )
    end
  end

  context "as an admin user", :admin do
    let(:admin_user) { load(:person__admin_user) }

    context "with a correct slug" do
      ["oeuoau-aoeu", "OEU-aoeuA"].each do |slug|
        it "creates a question with the slug #{slug}" do
          NeonPostgres::Models::Question.insert(
            prompt: prompt,
            question_type: "single-choice",
            slug: slug
          )
          expect(NeonPostgres::Models::Question.count).to eq 1
          expect(NeonPostgres::Models::Question.all.first[:prompt]).to eq prompt
        end
      end
    end

    context "with an incorrect slug" do
      ["-oeuoau-aoeu", "O2U-aoeuA"].each do |slug|
        it "cannot create a question with the slug #{slug}" do
          expect do
            NeonPostgres::Models::Question.insert(
              prompt: prompt,
              question_type: "single-choice",
              slug: slug
            )
          end.to raise_error(
            Sequel::DatabaseError,
            /(PG::CheckViolation).*(value for domain slug violates)/
          )
        end
      end
    end
  end
end
