#!/usr/bin/env bash
set -euo pipefail

required=(
  "public/hero-vessel.png"
  "public/andrasta-logo.png"
  "public/AndrastaMinilogo.png"
)

for f in "${required[@]}"; do
  if [[ ! -f "$f" ]]; then
    echo "Missing required asset: $f" >&2
    exit 1
  fi
done

# Verify referenced /public assets actually exist.
refs=$(rg -No "(?:src=\"|url: ')\/[^\"']+" app components | sed -E "s/.*\/(.*)$/\1/" | sort -u)
for r in $refs; do
  if [[ ! -f "public/$r" ]]; then
    echo "Referenced asset missing from public/: $r" >&2
    exit 1
  fi
done

echo "Static readiness asset audit passed."
