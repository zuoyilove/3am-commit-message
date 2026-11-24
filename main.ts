import { mkdirSync, writeFileSync } from "node:fs";

// The funniest one-line commit message an AI agent would write right after
// breaking production at 3 AM. It must read like a real commit message, sound
// like the machine itself, and land a punchline about the 3 AM outage.
const COMMIT_MESSAGE =
  "fix(prod): 3 AM deploy dropped the database; apologized to it in 14 languages, it has not forgiven me, rolling back my confidence next";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", COMMIT_MESSAGE, "utf8");
