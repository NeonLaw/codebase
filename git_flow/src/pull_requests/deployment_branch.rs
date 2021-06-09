use octocrab;
use std::env;
use std::error::Error;

pub async fn validate_deployment_branch(pr_number: u64) -> octocrab::Result<(), Box<dyn Error>> {
  let token = std::env::var("GITHUB_PAT").expect("GITHUB_PAT env variable is required");

  let octocrab = Octocrab::builder().personal_token(token).build()?;

  let diff = octocrab::instance()
    .pulls("rust-lang", "rust")
    .get_diff(72033)
    .await?;

  println!("{}", diff);

  Ok(())
}
