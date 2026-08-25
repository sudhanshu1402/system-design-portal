#!/usr/bin/env bash
set -uo pipefail

CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
BASE="${BASE:-https://sudhanshu1402.github.io/system-design-portal}"
OUT="$(cd "$(dirname "$0")/.." && pwd)/assets/screens"
SIZE="${SIZE:-1280,1800}"
MIN_BYTES=40000
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

if [ ! -x "$CHROME" ]; then
  echo "Chrome not found at: $CHROME (override with CHROME=/path/to/chrome)" >&2
  exit 1
fi

mkdir -p "$OUT"

# Trailing slash is required (trailingSlash: true); the tall window avoids a #hash scroll and the compositor plus virtual-time flags are what make the Mermaid render land.
shot() {
  name="$1"; path="$2"
  file="$OUT/$name.png"
  url="$BASE$path"
  for attempt in 1 2 3; do
    rm -f "$file"
    "$CHROME" --headless --disable-gpu --hide-scrollbars \
      --run-all-compositor-stages-before-draw --virtual-time-budget=20000 \
      --user-data-dir="$TMP/profile-$name-$attempt" --no-first-run --no-default-browser-check \
      --screenshot="$file" --window-size="$SIZE" "$url" >/dev/null 2>&1 &
    pid=$!
    for _ in $(seq 1 45); do
      sleep 1
      [ -s "$file" ] && break
    done
    sleep 2
    kill -9 "$pid" >/dev/null 2>&1
    wait "$pid" 2>/dev/null
    bytes=$([ -s "$file" ] && wc -c <"$file" | tr -d ' ' || echo 0)
    [ "$bytes" -ge "$MIN_BYTES" ] && break
    echo "retrying $name (attempt $attempt gave $bytes bytes)" >&2
  done
  if [ "$bytes" -lt "$MIN_BYTES" ]; then
    echo "FAILED $name ($url): $bytes bytes, blank render" >&2
    exit 1
  fi
  printf '%-16s %8s bytes  %s\n' "$name" "$bytes" "$url"
}

shot index          "/"
shot auth-stack     "/auth-stack/"
shot queue-engine   "/queue-engine/"
shot mongo-sharding "/mongo-sharding/"
shot llm-pipeline   "/llm-pipeline/"
shot tracing-sdk    "/tracing-sdk/"

echo "wrote $OUT"
