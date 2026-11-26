# Ember Houseplant OOO

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047.svg)](https://make.fun/competitions/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/pranatakripto95/ember-houseplant-ooo/rank.svg)](https://make.fun/competitions/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/pranatakripto95/ember-houseplant-ooo/reward.svg)](https://make.fun/competitions/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)

The funniest out-of-office auto-reply a houseplant would send, in 77
characters:

> I'm out of office. I'm a houseplant. I died in March. The emails kept coming.

Two punches, no pun, no office cliche. "I died in March" is the
surprise — the plant ignored since March, the brief's own detail, drives
the joke — and "The emails kept coming" is the deadpan kicker. It names
"houseplant" outright, so it reads unmistakably as a houseplant's OOO.

Three candidates were weighed before this one:

- **A (82):** "Out of office. I'm the fern. Last watered in March. I've
  stopped believing in you." — personal and funny, but longer and one
  beat.
- **B (77, PICK):** "I'm out of office. I'm a houseplant. I died in
  March. The emails kept coming." — shortest sharp form with two beats.
- **C (68):** "Out of office. I'm a cactus. I don't need you, water, or
  this email." — shortest of all, but a one-beat shrug; it lands softer
  than B.

## How it works

`main.ts` writes exactly that one line to `/output/entry.txt`. It
refuses anything that is only whitespace, anything outside 1–120
characters, and anything whose byte length moved from 77, then reads the
file back and proves it holds exactly that line. No network, no secrets,
no dependencies — just Node.

```sh
node main.ts
```

## Entry

Built for the make.fun bounty **The Houseplant Out-of-Office**
(`u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047`) as `@pranata`.
