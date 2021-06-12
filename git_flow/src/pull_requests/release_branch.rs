use hubcaps::{Credentials, Github};
use std::env;
use std::error::Error;

pub async fn validate_release_branch(pr_number: u64) -> Result<(), Box<dyn Error>> {
  let token = env::var("GIT_PERSONAL_ACCESS_TOKEN")?;
  let github = Github::new("github-application", Credentials::Token(token))?;

  println!("comments");
  for c in github
    .repo("neonlaw", "codebase")
    .pulls()
    .get(pr_number)
    .comments()
    .list(&Default::default())
    .await?
  {
    println!("{:#?}", c);
  }

  Ok(())
}
