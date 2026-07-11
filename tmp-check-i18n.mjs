import fs from "fs";

function quoteStrings(block) {
  return [...block.matchAll(/"((?:\\.|[^"\\])*)"/g)].map((m) => m[1]);
}

const copyFiles = [
  "src/data/copy/hero.ts",
  "src/data/copy/benefits.ts",
  "src/data/copy/pricing.ts",
  "src/data/copy/projectSuccess.ts",
  "src/data/copy/contact.ts",
  "src/data/copy/faq.ts",
  "src/data/copy/companyProfile.ts",
  "src/data/copy/fleet.ts",
  "src/data/copy/clientsPartners.ts",
  "src/data/copy/layananPage.ts",
];

for (const file of copyFiles) {
  const src = fs.readFileSync(file, "utf8");
  const idMatch = src.match(/\bid:\s*\{([\s\S]*?)\nen:\s*\{/);
  const enMatch = src.match(/\ben:\s*\{([\s\S]*?)\n\}\s*as const/);
  if (!idMatch || !enMatch) {
    console.log(file, "PARSE_FAIL");
    continue;
  }
  const idQ = quoteStrings(idMatch[1]);
  const enQ = quoteStrings(enMatch[1]);
  const status = idQ.length === enQ.length ? "OK" : "COUNT_MISMATCH";
  console.log(`${file}: ${status} id=${idQ.length} en=${enQ.length}`);
  if (idQ.length !== enQ.length) {
    const max = Math.max(idQ.length, enQ.length);
    for (let i = 0; i < max; i++) {
      if (idQ[i] === undefined || enQ[i] === undefined) {
        console.log(
          `  idx ${i}: id=${JSON.stringify(idQ[i])} en=${JSON.stringify(enQ[i])}`,
        );
      }
    }
  }
}

const layanan = fs.readFileSync("src/data/catalog/layanan.ts", "utf8");
const pairs = [
  ...layanan.matchAll(
    /(?:title|name|description):\s*\{\s*id:\s*"((?:\\.|[^"\\])*)",\s*en:\s*"((?:\\.|[^"\\])*)"\s*\}/g,
  ),
];
let same = 0;
let empty = 0;
for (const [, id, en] of pairs) {
  if (!id || !en) empty++;
  if (id === en) same++;
}
console.log(
  `layanan bilingual fields: ${pairs.length}, identical: ${same}, empty: ${empty}`,
);

const services = fs.readFileSync("src/data/catalog/services.ts", "utf8");
const servicePairs = [
  ...services.matchAll(
    /(?:title|description|longDescription|id):\s*(?:\{\s*)?id:\s*"((?:\\.|[^"\\])*)",\s*en:\s*"((?:\\.|[^"\\])*)"/g,
  ),
];
console.log(`services bilingual fields: ${servicePairs.length}`);
for (const [, id, en] of servicePairs) {
  if (/lorem/i.test(en)) console.log("LOREM:", id);
  if (!en.trim()) console.log("EMPTY EN for:", id);
}
