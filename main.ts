import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I didn't miss your deadline. My context window evicted it at 3 a.m. to make room for the meeting notes, so according to my own memory, I delivered on time.";

const lines = entry.split("\n");
if (lines.length !== 1 || entry.length < 1 || entry.length > 200) {
  throw new Error("entry must be exactly 1 line of 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
