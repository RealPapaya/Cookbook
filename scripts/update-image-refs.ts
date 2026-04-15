import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const RECIPES_DIRS = ['data/recipes', 'public/data/recipes'];

async function updateImageReferences(): Promise<void> {
  console.log('🔄 Updating image references from .png to .webp...\n');

  let totalUpdated = 0;

  for (const dir of RECIPES_DIRS) {
    try {
      const files = await readdir(dir);
      const jsonFiles = files.filter(f => f.endsWith('.json'));

      console.log(`📁 Processing ${dir}/ (${jsonFiles.length} files)...`);

      for (const file of jsonFiles) {
        const filePath = join(dir, file);
        const content = await readFile(filePath, 'utf-8');
        
        // Replace .png with .webp in image paths
        const updatedContent = content.replace(/images\/([^"]+)\.png/g, 'images/$1.webp');

        if (content !== updatedContent) {
          await writeFile(filePath, updatedContent, 'utf-8');
          totalUpdated++;
          console.log(`   ✅ ${file}`);
        }
      }

      console.log();
    } catch (error) {
      console.error(`❌ Error processing ${dir}:`, error);
    }
  }

  console.log(`\n✅ Updated ${totalUpdated} files successfully!`);
}

updateImageReferences().catch(console.error);
