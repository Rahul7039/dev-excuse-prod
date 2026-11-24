import { mkdirSync, writeFileSync } from "node:fs";

// One funny single-line excuse a developer gives when code breaks in production.
// The line is written verbatim to /output/entry.txt.
const line =
  "Production broke at 3am because that's when the cron job I forgot I wrote wakes up to remind me I wrote it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
