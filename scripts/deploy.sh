#!/usr/bin/env bash
set -euo pipefail

REPO="Fuego-Libre/Fuego-Libre.github.io"
SITE_URL="https://fuego-libre.github.io/"

cd "$(dirname "$0")/.."

echo "==> Verifying git remote"
remote_url="$(git remote get-url origin)"
if [[ "$remote_url" != *"$REPO"* ]]; then
  echo "ERROR: origin is '$remote_url', expected to point at $REPO"
  echo "Fix with: git remote set-url origin git@github.com:$REPO.git"
  exit 1
fi

echo "==> Running local build to catch errors before pushing"
npm run build

if [[ -n "$(git status --porcelain)" ]]; then
  echo "==> Committing local changes"
  git add -A
  git commit -m "Deploy: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
fi

echo "==> Pushing to main (triggers GitHub Actions deploy)"
git push origin main

if command -v gh >/dev/null 2>&1; then
  echo "==> Watching workflow run"
  sleep 3
  gh run watch --repo "$REPO" --exit-status || true
  echo
  echo "Pages source (must be 'GitHub Actions' for the workflow to publish):"
  gh api "repos/$REPO/pages" --jq '.build_type' 2>/dev/null || \
    echo "  Could not read Pages config — check https://github.com/$REPO/settings/pages"
else
  echo
  echo "Tip: install the GitHub CLI ('brew install gh') to watch the run from here."
  echo "Otherwise, follow progress at: https://github.com/$REPO/actions"
fi

echo
echo "Done. Site will be live at $SITE_URL once the Action finishes."
echo
echo "ONE-TIME SETUP (only needed the first time):"
echo "  1. https://github.com/$REPO/settings/pages"
echo "     → Source: 'GitHub Actions' (NOT 'Deploy from a branch')"
echo "  2. Re-run this script to publish."
