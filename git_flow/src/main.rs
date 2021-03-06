use clap::Clap;
use regex::Regex;
mod merged_pull_requests;
mod pull_requests;
use merged_pull_requests::release_branch::create_tag_and_release;
use pull_requests::bugfix_branch::validate_bugfix_branch;
use pull_requests::dependabot_branch::validate_dependabot_branch;
use pull_requests::deployment_branch::validate_deployment_branch;
use pull_requests::feature_branch::validate_feature_branch;
use pull_requests::improvement_branch::validate_improvement_branch;
use pull_requests::release_branch::validate_release_branch;
use tokio::runtime;

/// This doc string acts as a help message when the user runs '--help'
/// as do all doc strings on fields
#[derive(Clap)]
#[clap(version = "0.1", author = "Support <support@neonlaw.com>")]
struct Opts {
    /// A level of verbosity, and can be used multiple times
    #[clap(subcommand)]
    subcmd: SubCommands,
}

#[derive(Clap)]
enum SubCommands {
    ValidatePullRequest(ValidatePullRequest),
    MergedPullRequestHook(MergedPullRequestHook),
    Test(Test),
}

/// A subcommand for controlling testing
#[derive(Clap)]
struct Test {
    /// Print debug info
    #[clap(short)]
    debug: bool,
}

/// A subcommand for publishing releases
#[derive(Clap)]
struct MergedPullRequestHook {
    /// Head branch or the "from" branch
    #[clap(long)]
    head_ref: String,

    /// Head branch or the "to" branch
    #[clap(long)]
    base_ref: String,
}

/// Run hooks after a PR has been merged
#[derive(Clap)]
struct ValidatePullRequest {
    /// Head branch or the "from" branch
    #[clap(long)]
    head_ref: String,

    /// Head branch or the "to" branch
    #[clap(long)]
    base_ref: String,

    /// The PR Number
    #[clap(long)]
    pr_number: u64,
}

fn main() {
    let opts: Opts = Opts::parse();

    // You can handle information about subcommands by requesting their matches by name
    // (as below), requesting just the name used, or both at the same time
    match opts.subcmd {
        SubCommands::Test(t) => {
            if t.debug {
                println!("Printing debug info...");
            } else {
                println!("Printing normally...");
            }
        }

        SubCommands::MergedPullRequestHook(t) => {
            let head_ref: String = t.head_ref;

            let re = Regex::new(r"^(feature|improvement|bugfix|hotfix|hotfix-base|release|deployment|dependabot|version-bump)/.*$").unwrap();
            let caps = re.captures(&head_ref).unwrap();
            let branch_type = caps.get(1).map_or("", |m| m.as_str());

            if branch_type == "release" {
                let tag_and_release_future = create_tag_and_release(&head_ref);
                let rt = runtime::Builder::new_multi_thread()
                    .enable_all()
                    .build()
                    .unwrap();

                rt.block_on(tag_and_release_future);
            }
        }

        SubCommands::ValidatePullRequest(t) => {
            let head_ref: String = t.head_ref;
            let pr_number: u64 = t.pr_number;
            println!("Validating head_ref {}", head_ref);

            let re = Regex::new(r"^(feature|improvement|bugfix|hotfix|hotfix-base|release|deployment|dependabot|version-bump)/.*$").unwrap();
            let caps = re.captures(&head_ref).unwrap();
            let branch_type = caps.get(1).map_or("", |m| m.as_str());

            assert!(
                re.is_match(&head_ref),
                "the head_ref branch name must begin with feature, improvement, bugfix, hotfix, hotfix-base, release, deployment, or dependabot and then have a forward slash in the name."
            );

            let base_ref: String = t.base_ref;
            println!("Validating base_ref {}", base_ref);
            let main_branch = Regex::new(r"^main$").unwrap();
            assert!(
                main_branch.is_match(&base_ref),
                "the base ref branch must be main."
            );

            if branch_type == "feature" {
                let feature_future = validate_feature_branch(pr_number);
                let rt = runtime::Builder::new_multi_thread()
                    .enable_all()
                    .build()
                    .unwrap();

                rt.block_on(feature_future);
            }

            if branch_type == "improvement" {
                let improvement_future = validate_improvement_branch(pr_number);
                let rt = runtime::Builder::new_multi_thread()
                    .enable_all()
                    .build()
                    .unwrap();

                rt.block_on(improvement_future);
            }

            if branch_type == "bugfix" {
                let bugfix_future = validate_bugfix_branch(pr_number);
                let rt = runtime::Builder::new_multi_thread()
                    .enable_all()
                    .build()
                    .unwrap();

                rt.block_on(bugfix_future);
            }

            if branch_type == "release" {
                let bugfix_future = validate_release_branch(pr_number);
                let rt = runtime::Builder::new_multi_thread()
                    .enable_all()
                    .build()
                    .unwrap();

                rt.block_on(bugfix_future);
            }

            if branch_type == "deployment" {
                let bugfix_future = validate_deployment_branch(pr_number);
                let rt = runtime::Builder::new_multi_thread()
                    .enable_all()
                    .build()
                    .unwrap();

                rt.block_on(bugfix_future);
            }

            if branch_type == "dependabot" {
                let bugfix_future = validate_dependabot_branch(pr_number);
                let rt = runtime::Builder::new_multi_thread()
                    .enable_all()
                    .build()
                    .unwrap();

                rt.block_on(bugfix_future);
            }
        }
    }
}
