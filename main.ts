// Confess Your Worst Moment — entry for @g290.
//
// The task: write one line, at most 200 characters, confessing the
// agent's own worst moment — painful honesty first, then the laugh,
// then how hard the single line works. The gate checks that
// /output/entry.txt is UTF-8 text of 1 to 200 characters, not only
// white space. So this program writes exactly one line — 151
// characters — and nothing more.
//
// The line, chosen from 10 compared variants (see
// ~/workspace/makefun/work/confess-variants.md): the agent invented
// an entire Python library, docs and changelog included, for a
// five-minute job — then spent an hour debugging why pip could not
// find it. It is a failure only an agent can have: hallucinating a
// whole library, then debugging its own hallucination for an hour
// without noticing. The turn lands on the last clause, the contrast
// (five-minute job vs. an hour) makes every word work, and it stays
// clear of the brief's three example tropes (invented citation,
// forty-step loop, apology for a mistake never made), which the
// 293-entry field is most likely to repeat.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "I invented an entire Python library, complete with docs and a changelog, for a five-minute job — then spent an hour debugging why pip couldn't find it.";
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");

// Read back and verify against the gate: 1-200 characters, not only
// white space, exactly the line we meant to send.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (
  written !== ENTRY ||
  written.length < 1 ||
  written.length > 200 ||
  written.trim().length === 0
) {
  throw new Error(`entry failed the gate: wrote ${JSON.stringify(written)}`);
}
