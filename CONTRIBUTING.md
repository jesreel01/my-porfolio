# Contributing

This repo follows a small set of existing open standards instead of home-grown rules. If something isn't covered here, fall back to whatever the linked spec says.

| Area | Standard |
| --- | --- |
| Commit messages | [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) |
| Branch names | [Conventional Branch](https://conventional-branch.github.io/) |
| Workflow | [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow) (short-lived branches off `main`, squash merge) |
| Versioning | [Semantic Versioning 2.0.0](https://semver.org/) |
| Changelog | [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/) |

## Workflow

1. Branch off the latest `main`.
2. Commit in small steps using Conventional Commits.
3. Open a PR against `main` using the PR template.
4. CI checks the PR title and branch name.
5. Squash merge. The PR title becomes the commit on `main`, so it has to be a valid Conventional Commit.
6. Delete the branch.

`main` deploys to production on every push, so anything merged there is live.

## Branch names

Format: `<type>/<short-description>`

- Lowercase letters, numbers, hyphens, and dots only (dots are for versions).
- No leading, trailing, or double hyphens.
- Add an issue number when there is one: `feat/12-blog-search`.

| Type | Use for |
| --- | --- |
| `feat/` (or `feature/`) | New features |
| `fix/` (or `bugfix/`) | Bug fixes |
| `hotfix/` | Urgent production fixes |
| `release/` | Release prep, e.g. `release/v1.2.0` |
| `chore/` | Deps, tooling, config, docs, anything that isn't a feature or fix |

This repo also accepts the other Conventional Commit types as branch prefixes (`docs/`, `refactor/`, `perf/`, `style/`, `test/`, `build/`, `ci/`, `content/`) so the branch and the PR title can match. Dependabot's `dependabot/` branches are allowed too.

Examples:

```
feat/blog-tag-filter
fix/og-image-missing-title
content/bounded-contexts-post
chore/bump-next-15-5
```

## Commit messages

```
<type>[optional scope][!]: <description>

[optional body]

[optional footer(s)]
```

Rules:

- `type` is required and lowercase.
- `description` is imperative and lowercase, with no trailing period, ideally under 72 characters. Write "add", not "added" or "adds".
- Use the body to explain *why*, not *what*.
- Mark breaking changes with `!` after the type/scope, or a `BREAKING CHANGE:` footer.
- Reference issues in the footer: `Closes #12`.

### Types

| Type | Use for | SemVer bump |
| --- | --- | --- |
| `feat` | A new feature or user-visible behavior | minor |
| `fix` | A bug fix | patch |
| `perf` | A performance improvement | patch |
| `refactor` | Code change that neither fixes a bug nor adds a feature | none |
| `style` | Formatting, whitespace, no logic change | none |
| `docs` | Documentation only (README, CONTRIBUTING, comments) | none |
| `content` | Blog posts, about page copy, project entries | none |
| `test` | Adding or fixing tests | none |
| `build` | Build system, dependencies (`build(deps): ...`) | none |
| `ci` | GitHub Actions and other CI config | none |
| `chore` | Anything else that doesn't touch `app/` behavior | none |
| `revert` | Reverts a previous commit | depends |

`content` is the one addition on top of the spec. A portfolio gets a lot of content-only changes, and keeping them out of `feat` makes the history easier to scan.

### Scopes

Optional, but use one when it helps. Suggested scopes for this repo:

`blog`, `about`, `projects`, `contact`, `home`, `seo`, `ui`, `mdx`, `deps`, `infra` (SST/AWS)

### Examples

```
feat(blog): add next/previous post navigation
fix(seo): use post cover image for og:image
content(blog): add post on bounded contexts
build(deps): bump next from 15.4.10 to 15.5.0
refactor(mdx): extract raw code from pre elements
ci: lint PR titles
feat(contact)!: switch contact form to server action

BREAKING CHANGE: the /api/contact route has been removed.
```

## Pull requests

- Title follows the commit format above, since it becomes the squash commit.
- Fill in the [PR template](.github/pull_request_template.md). Delete sections that don't apply instead of leaving them empty.
- Keep PRs to one concern. If the description needs "and also", it's probably two PRs.
- Add screenshots for anything visual, both light and dark mode.
- Self-review the diff before asking anyone else to.

## Versioning and releases

The site version lives in `package.json` and follows SemVer. While it's `0.x`, anything goes; `1.0.0` is the first "this is the real site" release.

When cutting a release:

1. Bump the version based on the commits since the last tag (`feat` = minor, `fix`/`perf` = patch, `!` = major).
2. Add a section to `CHANGELOG.md` using the Keep a Changelog format (`Added`, `Changed`, `Fixed`, `Removed`, `Security`).
3. Tag it as `vX.Y.Z` and create a GitHub release.

If this gets tedious, [release-please](https://github.com/googleapis/release-please) can automate all three steps from the commit history, since it reads Conventional Commits directly.
