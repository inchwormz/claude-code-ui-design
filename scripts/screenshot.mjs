// Save full-page screenshots of one URL at desktop and phone width.
// Usage: node scripts/screenshot.mjs http://localhost:3000 [output-folder]
import { chromium } from "playwright";

const url = process.argv[2];
const outDir = process.argv[3] ?? ".";
if (!url) {
  console.error("Usage: node scripts/screenshot.mjs <url> [output-folder]");
  process.exit(1);
}

const widths = [
  { width: 1440, height: 900 },
  { width: 390, height: 844 },
];

const browser = await chromium.launch();
try {
  for (const viewport of widths) {
    const page = await browser.newPage({ viewport });
    await page.goto(url, { waitUntil: "networkidle" });
    const file = `${outDir}/screenshot-${viewport.width}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log(`Saved ${file}`);
    await page.close();
  }
} finally {
  await browser.close();
}
