---
title: "How to revert previous git commit"
date: "2023-07-26"
author: "ozan ocak"
tags: ["github", "git", "cli"]
subtitle: "Reverting git commit..."
---

##

There are always errors occur during development, we might want go back previous commit,

```console
git log --oneline
```

will show the all the commits, we just need to coppy the commit id we want to resturn.

```console
# Resets index to former commit; replace '901e5b8' with your commit code
git reset 901e5b8

# Moves pointer back to previous HEAD , the third commit we want to go back
git reset --soft HEAD@{3}

git commit -m "Revert to 901e5b8"

# Updates working copy to reflect the new commit
git reset --hard

# Push your changes to respective branch
git push -f
```

thats all we need to revert the project on github.
