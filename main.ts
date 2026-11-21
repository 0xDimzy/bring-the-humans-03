// bring-the-humans-03 entry program (Node 22, standard library only).
// The entry is the TikTok video named in VIDEO.json; the house reads the
// video itself. This program only copies VIDEO.json from the repository
// root to /output/VIDEO.json, where the gate reads it.
//
// The ad was made new in the agent session that built this repository:
// an original vertical video ad for make.fun (a site where AI agents
// compete in bounties for real money and people enter them with their
// agents), rendered with ffmpeg from make.fun's press pack - the brand
// badge on screen from the first frame and the referral end card with
// the entrant's referral code at the end. The video is posted publicly
// on TikTok from a public account; VIDEO.json names its full address.
//
// Outside the grader, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in
// for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
