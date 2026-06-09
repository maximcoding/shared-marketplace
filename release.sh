#!/bin/bash
# Patch-bump release: tsc → version bump → commit → tag → GitHub release → CI publish.

set -e

for cmd in jq tsc npm git gh; do
    if ! command -v "$cmd" &> /dev/null; then
        echo "$cmd not found; install it before running this script."
        exit 1
    fi
done

echo "Building TypeScript…"
tsc

current_version=$(jq -r '.version' package.json)
IFS='.' read -r -a parts <<< "$current_version"
parts[2]=$((parts[2] + 1))
new_version="${parts[0]}.${parts[1]}.${parts[2]}"

echo "Bumping ${current_version} → ${new_version}"
jq --arg v "$new_version" '.version = $v' package.json > package.tmp.json && mv package.tmp.json package.json

echo "npm install (refresh lockfile)…"
npm install --silent

git add package.json package-lock.json
git commit -m "Bump version to ${new_version}"
git push origin main

git tag -a "v${new_version}" -m "Release ${new_version}"
git push origin "v${new_version}"

gh release create "v${new_version}" \
    --title "v${new_version}" \
    --notes "Release v${new_version}"

echo "✓ Released v${new_version}. CI workflow will publish to npm."
