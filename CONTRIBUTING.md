# How to contribute to DSAIC Website

## Contributing procedure

### Find an issue to work on

- You can contribute to this project by either creating an issue or by checking out the open issues available.

#### 1. Submit an issue

- Create a [new issue](https://github.com/DSAIC-Site/Frontend/issues)
- Comment on the issue (if you'd like to be assigned to it) - that way the issue can be assigned to you.

#### 2. Open issues

- Go to [open issues](https://github.com/DSAIC-Site/Frontend/issues)
- select an issue of your choice that is `open` or `need help` or is `up-for-grabs` and is not assigned.
- Comment on the issue (if you'd like to be assigned to it) - that way the issue can be assigned to you.

### Fork the repository (repo)

- If you're not sure, here's how to [fork the repo](https://help.github.com/en/articles/fork-a-repo)

#### Set up your local environment (optional)

If you're ready to contribute and create your PR, it will help to set up a local environment so you can see your changes.

1. Set up your development environment

   - install your favorite text editor/IDE
   - install [Nodejs](nodejs.org)

   <br>

2. Clone your fork

If this is your first time forking our repo, this is all you need to do for this step:

```bash
git clone https://github.com/DSAIC-Site/Frontend.git
```

```bash
cd Frontend
```

Make sure you checkout the `develop` branch by running the command `git checkout develop`

If you've already forked the repo and created the develop branch, you'll want to ensure your fork and your develop branch is configured and that it's up to date. This will save you the headache of potential merge conflicts.

To [configure your fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork):

```
$ git remote add upstream https://github.com/DSAIC-Site/Frontend.git
```

To [sync your fork and branch with the latest changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork):

```bash
git checkout develop
git fetch upstream
git merge upstream/develop
```

3. Install dependencies

We use [npm](https://www.npmjs.com/) to manage dependencies. To install all dependencies, run:

```bash
npm install
```

<br>

### Make awesome changes!

<br>

1. Create new branch for your changes

```bash
git checkout -b new_branch_name
```

2. start development server

```bash
npm run dev
```

<br>

---

3. Make changes to the codebase

- Open this directory in your favorite text editor / IDE, and see your changes live by visiting `localhost:3000` from your browser
- Pro Tip: Explore scripts within `package.json` for more build options
- Pro Tip: Use [Prettier](https://prettier.io/) to format your code before committing by running `npm run prettier:check` and `npm run prettier:format` to check and fix formatting issues

4. Add changes made to the repo addressing an issue

```bash
git add [file_name]
```

5. Commit and prepare for pull request (PR). In your PR commit message, reference the issue it resolves (see [how to link a commit message to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).

```bash
git commit -m "brief description of changes [Fixes #1234]"
```

6. Push to your GitHub account

```bash
git push -u origin [feature_branch]
```

### Submit your Pull Request (PR)🚀

- After your changes are commited to your GitHub fork, submit a pull request (PR) to the `develop` branch of the `DSAIC-Site/Frontend` repo
- In your PR description, reference the issue it resolves (see [linking a pull request to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword))
  - ex. `Updates out of date content [Fixes #1234]`

### Sit back, relax and wait for your PR to be reviewed/merged

- We'll review your PR as soon as possible
- We may suggest some changes or improvements or alternatives.
