import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
const files = fs.readdirSync(publicDir);

const sizes = {
  'mobile': 800,
  'tablet': 1200,
  'desktop': 2048,
};

async function optimizeImages() {
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.webp')) {
      const filePath = path.join(publicDir, file);
      const fileName = path.parse(file).name;

      // Generate responsive images
      for (const [size, width] of Object.entries(sizes)) {
        const newFileName = `${fileName}-${size}.webp`;
        const newFilePath = path.join(publicDir, newFileName);

        if (!fs.existsSync(newFilePath)) {
          console.log(`Generating ${size} version for ${file}...`);
          await sharp(filePath)
            .resize(width)
            .webp({ quality: 80 })
            .toFile(newFilePath);
        }
      }

      // Convert original to webp if it's not already
      if (!file.endsWith('.webp')) {
        const webpPath = path.join(publicDir, `${fileName}.webp`);
        if (!fs.existsSync(webpPath)) {
          console.log(`Converting ${file} to WebP...`);
          await sharp(filePath)
            .webp({ quality: 85 })
            .toFile(webpPath);
        }
      }
    }
  }
}

optimizeImages().catch(console.error);
