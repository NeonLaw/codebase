use hubcaps::{Credentials, Github};
use std::env;
use std::error::Error;

pub async fn validate_version_bump_branch(pr_number: u64) -> Result<(), Box<dyn Error>> {
  let token = env::var("GITHUB_PAT")?;
  let github = Github::new("github-application", Credentials::Token(token))?;

  println!("commits");
  for c in github
    .repo("neonlaw", "codebase")
    .pulls()
    .get(pr_number)
    .commits()
    .list(&Default::default())
    .await?
  {
    println!("{:#?}", c);
  }

  Ok(())
}
