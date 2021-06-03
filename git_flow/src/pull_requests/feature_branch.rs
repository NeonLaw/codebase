use octocrab::{params};

pub async fn validate_feature_branch(head_ref: &str) -> octocrab::Result<()> {
    let octocrab = octocrab::Octocrab::builder()
    .personal_token(std::env::var("GITHUB_PAT").unwrap())
    .build()?;

    match octocrab.issues("neonlaw", "codebase")
        .list()
        .creator("shicholas")
        .state(params::State::All)
        .per_page(50)
        .send()
        .await
        {
            Ok(page) => println!("{:#?}", page),
            Err(error) => println!("{:#?}", error),
        }

    Ok(())
}
