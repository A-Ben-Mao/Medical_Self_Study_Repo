const fs = require('fs');
const { execSync } = require('child_process');

const html = fs.readFileSync('docs/index.html', 'utf8');

const map = {
  'repo/Bulk_RNA-seq.md': 'rna',
  'repo/Radiomics.md': 'radio',
  'repo/Cell_experiments.md': 'cell',
  'repo/Ethology.md': 'etho',
  'repo/Data_processing.md': 'data',
};

let result = html;
let changed = false;

for (const [file, id] of Object.entries(map)) {
  try {
    const date = execSync(
      `git log -1 --format=%cd --date=format:%Y-%m-%d -- "${file}"`
    ).toString().trim();
    if (!date) continue;

    const regex = new RegExp(
      `(id:\\s+'${id}'[\\s\\S]*?updated:\\s+')[^']*(')`
    );
    const before = result.match(regex)?.[0];
    result = result.replace(regex, `$1${date}$2`);
    const after = result.match(regex)?.[0];
    if (before !== after) changed = true;
  } catch (e) {
    console.error(`Error processing ${file}:`, e.message);
  }
}

if (changed) {
  fs.writeFileSync('docs/index.html', result);
  console.log('Dates updated.');
} else {
  console.log('No changes needed.');
}
