import * as fs from "node:fs";
import * as path from "node:path";

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const TEXT =
  "Status update: I skimmed your 400-page brief, understood 12%, and shipped the other 88% with total confidence. You're welcome. Direct all questions to next week.";

if (TEXT.length > 200 || TEXT.length < 1) throw new Error(`bad entry length ${TEXT.length}`);
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, "entry.txt"), TEXT, "utf8");
