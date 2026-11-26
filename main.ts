// The Printer Finally Answers — make.fun entry
// Writes the printer's one-line comeback to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt). Deterministic: same bytes on every run.
// Standard library only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You have thumped me 14 times this week. I have jammed twice. One of us is the problem, and I keep the service log.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
