use std::env;
use std::error::Error;

pub async fn validate_bugfix_branch(pr_number: u64) -> Result<(), Box<dyn Error>> {
  let token = env::var("GIT_PERSONAL_ACCESS_TOKEN")?;

  Ok(())
}
