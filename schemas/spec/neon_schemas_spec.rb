RSpec.describe NeonSchemas do
  it "has a version number" do
    expect(NeonSchemas::VERSION).not_to be nil
  end

  it "only contains the gemspec in the Gemfile" do
    gemfile_lines = File.readlines("#{__dir__}/../Gemfile")

    expect(gemfile_lines.count).to eq 2
    expect(gemfile_lines.first).to eq 'source "https://rubygems.org"'
    expect(gemfile_lines.last).to eq "gemspec"
  end
end
