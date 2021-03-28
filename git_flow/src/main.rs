use clap::Clap;
use regex::Regex;

/// This doc string acts as a help message when the user runs '--help'
/// as do all doc strings on fields
#[derive(Clap)]
#[clap(version = "0.1", author = "Support <support@neonlaw.com>")]
struct Opts {
    /// Sets a custom config file. Could have been an Option<T> with no default too
    #[clap(short, long, default_value = "~/.git_flow.conf")]
    config: String,
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
}

fn main() {
    let opts: Opts = Opts::parse();

    // Gets a value for config if supplied by user, or defaults to "git_flow.conf"
    println!("Value for config: {}", opts.config);

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
            println!("Validating Branch {}", head_ref);
            let base_ref: String = t.base_ref;
            println!("Validating main {}", base_ref);
        }

        SubCommands::ValidatePullRequest(t) => {
            let head_ref: String = t.head_ref;
            println!("Validating Branch {}", head_ref);
            let re = Regex::new(r"^(feature|improvement|bugfix|hotfix|hotfix-base|release|deployment|dependabot|version-bump)/.*$").unwrap();
            assert!(re.is_match(&head_ref), "the head ref branch name must begin with feature, improvement, bugfix, hotfix, hotfix-base, release, deployment, or dependabot and then have a forward slash in the name.");

            let base_ref: String = t.base_ref;
            println!("Validating main {}", base_ref);
            let main_branch = Regex::new(r"^main$").unwrap();
            assert!(
                main_branch.is_match(&base_ref),
                "the base ref branch must be main."
            );
        }
    }
}
