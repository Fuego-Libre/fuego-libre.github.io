#!/usr/bin/env bash
# Wrapper around `npx shadcn add` that normalizes the result to our
# Name/index.tsx convention.
#
# Usage:
#   npm run shadcn:add -- <component> [more-components...]
#   e.g. npm run shadcn:add -- card dialog
set -euo pipefail

cd "$(dirname "$0")/.."

if [[ $# -eq 0 ]]; then
  echo "Usage: npm run shadcn:add -- <component> [more-components...]"
  exit 1
fi

echo "==> Adding shadcn component(s): $*"
npx shadcn@latest add "$@"

echo "==> Normalizing into Name/index.tsx convention"
node scripts/normalize-ui.mjs
