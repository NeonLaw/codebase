use std::env;
use std::error::Error;

pub async fn create_tag_and_release(head_ref: &str) -> Result<(), Box<dyn Error>> {
  let token = env::var("GIT_PERSONAL_ACCESS_TOKEN")?;

  Ok(())
}
