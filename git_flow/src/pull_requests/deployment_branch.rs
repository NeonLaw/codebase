use octocrab::{
    Result,
    Octocrab,
};
use std::error::Error;

pub async fn validate_deployment_branch(pr_number: u64) -> Result<(), Box<dyn Error>> {
  let token = std::env::var("GIT_PERSONAL_ACCESS_TOKEN").expect("GIT_PERSONAL_ACCESS_TOKEN env variable is required");

  let octocrab = Octocrab::builder().personal_token(token).build()?;

  let diff = octocrab::instance()
    .pulls("rust-lang", "rust")
    .get_diff(72033)
    .await?;

  println!("{}", diff);

  Ok(())
}
