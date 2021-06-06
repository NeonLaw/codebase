use hubcaps::{Credentials, Github};
use std::env;
use std::error::Error;

pub async fn create_tag_and_release(head_ref: &str) -> Result<(), Box<dyn Error>> {
  let token = env::var("GITHUB_PAT")?;
  let github = Github::new("github-application", Credentials::Token(token))?;

  println!("comments");
  for c in github
    .repo("neonlaw", "codebase")
    .pulls()
    .get(20)
    .comments()
    .list(&Default::default())
    .await?
  {
    println!("{:#?}", c);
  }

  Ok(())
}
