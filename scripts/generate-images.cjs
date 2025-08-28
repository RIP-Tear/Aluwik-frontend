/* eslint-disable no-console */
require("dotenv").config();
require("dotenv").config({ path: ".env.local", override: true });

const { v2: cloudinary } = require("cloudinary");
const fs = require("fs");
const path = require("path");

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName) throw new Error("Missing NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME");
if (!apiKey) throw new Error("Missing CLOUDINARY_API_KEY");
if (!apiSecret) throw new Error("Missing CLOUDINARY_API_SECRET");

cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret });

const CATS = ["systemyOkiennoDzwiowe", "fasady", "stolarkaPrzeciwpozarowa", "ogrodyZimowe"];

(async () => {
  try {
    const base = `https://res.cloudinary.com/${cloudName}/image/upload`;
    const outDir = path.join(process.cwd(), "public");
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

    const results = [];

    for (const cat of CATS) {
      let next_cursor;
      const expr = `resource_type:image AND tags=${cat}`;

      do {
        const res = await cloudinary.search
          .expression(expr)
          .sort_by("public_id", "asc")
          .max_results(500)
          .next_cursor(next_cursor)
          .execute();

        for (const r of res.resources || []) {
          const pid = r.public_id;
          const url = `${base}/f_auto,q_auto/v${r.version}/${pid}.${r.format}`;
          const thumbUrl = `${base}/c_fill,w_800,h_600,f_auto,q_auto/v${r.version}/${pid}.${r.format}`;

          results.push({
            id: results.length,
            category: cat,
            image: {
              url,
              thumbUrl,
              name: pid,
              publicId: pid,
            },
          });
        }

        next_cursor = res.next_cursor;
      } while (next_cursor);
    }

    const counts = CATS.reduce((acc, c) => {
      acc[c] = results.filter(x => x.category === c).length;
      return acc;
    }, {});
    console.log("📊 COUNTS:", counts);

    const outPath = path.join(outDir, "images.json");
    fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
    console.log(`✅ Wrote ${results.length} items -> ${outPath}`);
  } catch (e) {
    console.error("❌ Generate failed:", e?.response?.error || e?.message || e);
    process.exit(1);
  }
})();
