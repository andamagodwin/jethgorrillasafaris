import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const workspaceDir = __dirname;
const srcDir = path.join(workspaceDir, 'src');
const mapFilePath = path.join(workspaceDir, 'media_map.json');

if (!fs.existsSync(mapFilePath)) {
  console.error('Error: media_map.json not found!');
  process.exit(1);
}

const mediaMap = JSON.parse(fs.readFileSync(mapFilePath, 'utf8'));

// Helper to recursively find code files to replace references in
function getCodeFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const dirContents = fs.readdirSync(dir);
  for (const item of dirContents) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getCodeFiles(fullPath, files);
    } else {
      const ext = path.extname(item).toLowerCase();
      if (['.tsx', '.ts', '.js', '.jsx', '.css', '.html'].includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

// Function to safely replace references using quote-enclosing boundaries
function replaceWithQuotes(content, localPath, cloudinaryUrl) {
  const quotes = ['"', "'", '`'];
  let count = 0;
  for (const q of quotes) {
    const searchStr = `${q}${localPath}${q}`;
    const replaceStr = `${q}${cloudinaryUrl}${q}`;
    if (content.includes(searchStr)) {
      const occurrences = (content.split(searchStr).length - 1);
      content = content.split(searchStr).join(replaceStr);
      count += occurrences;
    }
  }
  return { content, count };
}

function main() {
  console.log('\n--- Starting Quote-Enclosed Code Reference Replacements ---');
  
  // Sort keys by length descending as a best practice
  const keys = Object.keys(mediaMap).sort((a, b) => b.length - a.length);
  
  const filesToProcess = [
    ...getCodeFiles(srcDir),
    path.join(workspaceDir, 'index.html')
  ].filter(f => fs.existsSync(f));

  console.log(`Found ${filesToProcess.length} files to scan for replacements.`);

  let totalReplacements = 0;
  let updatedFilesCount = 0;

  for (const filePath of filesToProcess) {
    let content = fs.readFileSync(filePath, 'utf8');
    let fileReplacedCount = 0;

    for (const key of keys) {
      const result = replaceWithQuotes(content, key, mediaMap[key]);
      content = result.content;
      fileReplacedCount += result.count;
    }

    if (fileReplacedCount > 0) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`[UPDATED] ${path.relative(workspaceDir, filePath)}: replaced ${fileReplacedCount} references.`);
      updatedFilesCount++;
      totalReplacements += fileReplacedCount;
    }
  }

  console.log(`\nReplacements complete! Replaced ${totalReplacements} references total across ${updatedFilesCount} files.`);
}

main();
