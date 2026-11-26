import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The Houseplant Out-of-Office — one out-of-office auto-reply a houseplant
// would send, at most 120 characters. Judge weighs, in order: reads as a
// houseplant OOO, actually funny (fresh surprise, not a mild pun or stock
// office phrase), the plant's own life drives the joke, tight, original.
//
// 3 drafts, counted in Node (chars == bytes here, plain ASCII):
// A (82): "Out of office. I'm the fern. Last watered in March. I've stopped believing in you."
// B (77, PICK): "I'm out of office. I'm a houseplant. I died in March. The emails kept coming."
// C (68): "Out of office. I'm a cactus. I don't need you, water, or this email."
//
// Pick B. Two punches, no pun, no office cliche: "I died in March" is the
// surprise — the plant ignored since March, the brief's own detail, drives
// the joke — and "The emails kept coming" is the deadpan kicker. It names
// "houseplant" outright, so criterion 1 is unmistakable, and at 77 chars it
// is tighter than A while landing harder than C's one-beat shrug.
const ENTRY =
  "I'm out of office. I'm a houseplant. I died in March. The emails kept coming.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read-back self-check: what the grader gates must be exactly what we wrote.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== ENTRY) throw new Error("read-back mismatch");
if (back.trim().length === 0) throw new Error("entry is only whitespace");
if (back.length < 1 || back.length > 120) {
  throw new Error(`entry length ${back.length} outside 1-120`);
}
if (Buffer.byteLength(back, "utf8") !== 77) {
  throw new Error(`entry byte length changed: ${Buffer.byteLength(back, "utf8")}`);
}
console.log(`wrote ${back.length} chars: ${JSON.stringify(back)}`);
