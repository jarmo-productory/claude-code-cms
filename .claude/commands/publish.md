---
description: Commit all changes and push to remote
allowed-tools: Bash(git:*)
---

Review all changes, create a commit with a descriptive message, and push to the remote repository.

Steps:
1. Run `git status` to see all changes
2. Run `git diff --staged` and `git diff` to understand what changed
3. Run `git log -3 --oneline` to see recent commit style
4. Stage all changes with `git add -A`
5. Create a commit with a clear, descriptive message following the repository's commit style
6. Push to remote with `git push`

Important:
- Always include meaningful commit messages that describe WHAT changed and WHY
- Follow the existing commit message style in the repository
- If there are no changes to commit, inform the user
