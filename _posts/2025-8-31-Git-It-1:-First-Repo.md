---
layout: blog
title: 'Git It! Part 1: Your First Git Repo'
description: Learn how to version control your code
category: DevOps
---
### What?
Git is a very popular version control tool, and entire companies have been built around it like GitHub.
It is very popular for many reasons:

| Reason | Why? |
|--------|------|
|Easy collabration|Software development is linear, making it easy to work with is excellent.|
|FOSS| Many version-control tools before Git were not FOSS, so this was a big win for the Open Source community|
|Code tracking| For each change, you can make a Git 'commit', which stores a version of your code to update, rollback or modify, this is so one big change doesn't make your working code hard to recover|
|Online Platforms| Online services have been made around Git like GitHub, which have made it easier for Open Source with things like PRs, Online Repos, Issues, .etc. Others exist like GitLab or BitBucket|

This is also great for things like CI/CD that are built around version control to make developers life's easier via automation.
### Why?
Git is a powerful tool that:
1. Is required if you want a job (or it should be)
2. Is required for easily sharing open-source software 
3. Makes your life easier
4. Makes collabration easier
5. Is likely not dying off or changing soon (unlike JS frameworks rebuilding themselves)

### Wait, let's install Git
Installing Git depends on your operating system, and so does the difficulty, but the TL;DR is:

**Linux**: just use your package manager: 
```bash
dnf install git
```

**Windows**: There is an installer for git [here.](https://git-scm.com/downloads/win)

**MacOS**: It may include git by default, if not you can use brew:
```zsh
brew install git
```
There aren't many other options besides using package managers, installing XCode, or building from source.
### Init && Repos
For each program/project you make, git will store it inside a 'repo', a base that will store any code changes, and files once you tell it to.

To make your first repo, we first need a directory which needs code. For the purpose of this post, this will be the directory structure:
```
awesome-code {
    src {
        main.py
    }
    pyproject.toml
    README.md
    file-i-cant-afford-to-show.pem
}
```

And this is the python code in the 'main.py':
```python
import time

def main():
    while True:
        print('this code is so awesome')
        time.sleep(1)

if __name__ == '__main__':
    main()
```
Now let's make a git repo.

Run:
```bash
git init
```

```
#output:
Initialized empty Git repository in {path}
```

You've now just made (or initalized) a git repository, and get access to track your changes as you make more code.

### Next?(.js)
We've created a git repo, but don't understand anything about it, let's run `git status`:

```bash
On branch master
Your branch is up-to-date with 'origin/master'.

Untracked files:
  (use "git add ..." to include in what will be committed)
	src/main.py
    pyproject.toml
    README.md
    file-i-cant-afford-to-show.pem

no changes added to commit (use "git add" and/or "git commit -a")
```
Wait! Git recognized the pem key. That can't be continously tracked because it's a provate key. 

Fortunately, Git has a process to ignore files/directories in the case of ignoring provate files.
That is called a .gitignore file, a file Git reads and ignores any filename that is linked in it. Let's make one.

```bash
touch .gitignore
# or open one with your text editor
nvim .gitignore
# as for windows users, I don't know 
# what you guys do
```

To tell git what to not track,
either the filename (or directory name) has to be labeled, like:
```bash
# this is the .gitignore file, whatever appended to it will 
file-i-cant-afford-to-show.pem
```
After writing, let's run `git status` again:
```bash
On branch master
Your branch is up-to-date with 'origin/master'.

Untracked files:
  (use "git add ..." to include in what will be committed)
	src/main.py
    pyproject.toml
    README.md

no changes added to commit (use "git add" and/or "git commit -a")
```
Now that's been dealt with, we need to add the 'untracked files' as called by Git to stage changes for the working directory, 
which just means preparing them to run a commit.

The command for that is:
```bash
git add .
# add usually stages files/directories from in the current directory.
# The '.' symbol states that Git can recursively add files/directories unless those mentioned in a .gitingore (which is what we're doing)
```
You will see no response, that's normal.
### Now Let's Commit
Now we need to make a 'commit', in Git, a commit is a store of your project at that time, that you can revert back to, diverge off of (more on that next post), or continue from.

We've already staged those files, now to commit, run:
```bash
git commit -m "{message}"
# we are running commit in -m mode, allowing to 
# add a message for esch store we make, in this case you can add whatever you want
```

After that, you will see:
```bash
 [master (root-commit) 221ec6e] {message}
 3 files added, {number} insertions(+)
 create mode 100644 README.md
 create mode 100644 src/main.py
 create mode 100644 pyproject.toml
```
You've successfully stored your project change (or rather creation) inside a commit.
### End
You've successfully learned the minimal basics of Git, but as for fixing merge conflicts, tricks. online platforms, branches, and other stuff, this tutorial won't teach you that.
If for whatever reason, you want to use this site to learn Git, part 2 will come whenever I feel like it (1-2 months or never).