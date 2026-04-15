import sharp from 'sharp';
import { readdir, mkdir, copyFile } from 'fs/promises';
import { join, parse, extname } from 'path';
import { existsSync } from 'fs';

const IMAGES_DIR = 'images';
const BACKUP_DIR = 'images_backup';
const SUPPORTED_FORMATS = ['.png', '.jpg', '.jpeg'];
const WEBP_QUALITY = 85; // Balance between quality and file size

interface ConversionResult {
  original: string;
  converted: string;
  originalSize: number;
  convertedSize: number;
  savings: number;
}

async function convertToWebP(): Promise<void> {
  console.log('🖼️  Starting image conversion to WebP...\n');

  // Create backup directory if it doesn't exist
  if (!existsSync(BACKUP_DIR)) {
    await mkdir(BACKUP_DIR, { recursive: true });
    console.log(`📁 Created backup directory: ${BACKUP_DIR}\n`);
  }

  // Read all files from images directory
  const files = await readdir(IMAGES_DIR);
  const imageFiles = files.filter(file => 
    SUPPORTED_FORMATS.includes(extname(file).toLowerCase())
  );

  if (imageFiles.length === 0) {
    console.log('❌ No images found to convert.');
    return;
  }

  console.log(`Found ${imageFiles.length} images to convert:\n`);

  const results: ConversionResult[] = [];
  let totalOriginalSize = 0;
  let totalConvertedSize = 0;

  for (const file of imageFiles) {
    const inputPath = join(IMAGES_DIR, file);
    const { name } = parse(file);
    const outputPath = join(IMAGES_DIR, `${name}.webp`);
    const backupPath = join(BACKUP_DIR, file);

    try {
      // Backup original file
      await copyFile(inputPath, backupPath);

      // Get original file size
      const originalBuffer = await sharp(inputPath).toBuffer();
      const originalSize = originalBuffer.length;

      // Convert to WebP
      const convertedBuffer = await sharp(inputPath)
        .webp({ quality: WEBP_QUALITY })
        .toFile(outputPath);

      const convertedSize = convertedBuffer.size;
      const savings = ((originalSize - convertedSize) / originalSize) * 100;

      totalOriginalSize += originalSize;
      totalConvertedSize += convertedSize;

      results.push({
        original: file,
        converted: `${name}.webp`,
        originalSize,
        convertedSize,
        savings
      });

      console.log(`✅ ${file}`);
      console.log(`   Original: ${(originalSize / 1024).toFixed(2)} KB`);
      console.log(`   WebP: ${(convertedSize / 1024).toFixed(2)} KB`);
      console.log(`   Savings: ${savings.toFixed(1)}%\n`);

    } catch (error) {
      console.error(`❌ Failed to convert ${file}:`, error);
    }
  }

  // Print summary
  const totalSavings = ((totalOriginalSize - totalConvertedSize) / totalOriginalSize) * 100;
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 CONVERSION SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total images converted: ${results.length}`);
  console.log(`Original total size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`WebP total size: ${(totalConvertedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total savings: ${((totalOriginalSize - totalConvertedSize) / 1024 / 1024).toFixed(2)} MB (${totalSavings.toFixed(1)}%)`);
  console.log('='.repeat(60));
  console.log(`\n✅ Original images backed up to: ${BACKUP_DIR}`);
  console.log('⚠️  Remember to update image references from .png to .webp in your code!');
}

convertToWebP().catch(console.error);

