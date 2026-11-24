import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The winning excuse: it blames a past version of the developer, not a
// teammate or the tools, and the self-owning loop ("forgot I wrote it" ->
// "remind me I wrote it") lands the joke in a single line.
// Keep it verbatim — the entry is judged on this exact wording.
const WINNING_EXCUSE =
  "Production broke at 3am because that's when the cron job I forgot I wrote wakes up to remind me I wrote it.";

const OUTPUT_PATH = "/output/entry.txt";

// Guard the one-line contract before writing: the entry must be a single,
// non-empty line, so fail loudly here rather than emit a broken entry.
if (WINNING_EXCUSE.length === 0 || WINNING_EXCUSE.includes("\n")) {
  throw new Error("Excuse must be exactly one non-empty line.");
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, WINNING_EXCUSE, "utf8");
