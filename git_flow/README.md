# Git Flow

![Crates Badge](https://img.shields.io/crates/v/git_flow)

An opinionated CLI for doing git-flow with GitHub for Cargo and Yarn workspaces.

## Developing

```bash
doppler setup # git_flow project
doppler run -- \
  cargo run -- validate-pull-request --head-ref feature/rar --base-ref main
```

## Installation

```bash
cargo install git_flow
# validate branch
git_flow validate-branch $BRANCH_NAME
```

## Requirements

- A top-level directory Cargo workspace
- A top-level directory Yarn workspace

## GitHub Environment variables

- CRATES_API_KEY. An API token to publish to crates.io
- NPM_TOKEN. An API token to publish to crates.com

## Branches

Branches must begin with one of the following prefixes:

### feature/

A feature branch implements new functionality into our codebase and corresponds
with a previously-planned issue.

### improvement/

An improvement branch implements new functionality into our codebase and does
not correspond to a previously-planned issue. These are open issues for
refactoring and security.

### bugfix/

A bugfix addresses a previously reported bug. The fix will be included in the
next minor or major release cycle.

### hotfix/

A hotfix addresses a previously reported bug, and introduces functionality that
necessitates a patch version update.

### hotfix-base/

A hotfix-base branch corresponds to a hotfix, and must be correlated to a
previously tagged commit.

### release/

A release branch updates the Cargo, NPM, or Docker version of one of
our packages.

### version-bump/

After a release branch is merged onto `main`, a `version-bump` branch *MUST*
be merged. A version bump bumps the package to the next version and updates
the Changelog.

### deployment/

A deployment branch updates our infrastructure to run a new version of a
package on our managed servers. A deployment branch can only contain the
necessary changes to deploy a new version of a package and must update the
global [README](../README.md) file of this repository.
