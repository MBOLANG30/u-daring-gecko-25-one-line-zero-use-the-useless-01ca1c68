import { mkdirSync, writeFileSync } from "node:fs";

// One original line: a hilariously useless superpower.
// The grand power (teleport anywhere on Earth) collapses into a
// limitation (only within arm's reach) in the last few words.
const line =
  "I can teleport anywhere on Earth — as long as it's within arm's reach of where I'm already standing.";

// The gate requires 1–200 characters of non-whitespace UTF-8 text.
// Fail loudly instead of writing an invalid entry.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry line must be 1–200 non-whitespace chars, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
