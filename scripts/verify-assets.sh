#!/usr/bin/env bash
set -euo pipefail

required=(
  "public/andrasta-logo.svg"
  "public/hero-vessel.svg"
  "public/icon.svg"
  "public/apple-touch-icon.svg"
)

missing=0
for file in "${required[@]}"; do
  if [[ ! -f "$file" ]]; then
    echo "Missing required asset: $file"
    missing=1
  fi
done

if [[ "$missing" -ne 0 ]]; then
  echo "Asset verification failed. Add the missing files into the repository."
  exit 1
fi

echo "Asset verification passed."
