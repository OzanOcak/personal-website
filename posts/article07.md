---
title: "Fixing .gitignore tracking issue"
date: "2023-05-08"
author: "ozan ocak"
tags: ["Git", ".env"]
subtitle: "fixing untracked git files ...."
---

## How to fix .gitignore is not working issue

If you've already committed the `.env` file to your repository, it's important to remove it from your commit history before adding it to your `.gitignore`. You can do this by using `git filter-branch` or `git filter-repo`, but it's a complex process that can be risky if you're not familiar with Git's internals. Instead, you can consider creating a new commit that removes the file and push that commit to your repository. However, be aware that this will create a new commit history and may cause issues if other people are collaborating on your repository. It's generally best to avoid committing sensitive information to your repository in the first place.
However, .gitignore file somedtimes doesnt work and untrack files that written in .gitignore file.

First we need to clean cache

```console
git rm -r --cached .
```

Now execute

```console
git add .
git commit -m "fixed untracked files"
```

Now .gitignore file will track any files , the most importantly the .env file.
