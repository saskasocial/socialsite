const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgContent = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="8" fill="#8B5CF6"/>
  <path d="M19.5 11.5C19.5 13.5 17.5 14 16 14C14.5 14 12.5 13.5 12.5 11.5C12.5 9.5 14.5 9 16 9C17.5 9 19.5 9.5 19.5 11.5Z" fill="white"/>
  <path d="M12.5 20.5C12.5 18.5 14.5 18 16 18C17.5 18 19.5 18.5 19.5 20.5C19.5 22.5 17.5 23 16 23C14.5 23 12.5 22.5 12.5 20.5Z" fill="white"/>
  <path d="M19.5 11.5C19.5 13.5 17.5 14 16 14C14.5 14 12.5 13.5 12.5 11.5C12.5 9.5 14.5 9 16 9C17.5 9 19.5 9.5 19.5 11.5ZM12.5 20.5C12.5 18.5 14.5 18 16 18C17.5 18 19.5 18.5 19.5 20.5C19.5 22.5 17.5 23 16 23C14.5 23 12.5 22.5 12.5 20.5ZM19 14L13 18" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>`;

const targets = [
  { path: 'packages/landing/public', name: 'icon' },
  { path: 'packages/webapp/public', name: 'icon' }
];

async function generateIcons() {
  const svgBuffer = Buffer.from(svgContent);

  for (const target of targets) {
    // Create PNG
    await sharp(svgBuffer)
      .resize(32, 32)
      .toFile(path.join(target.path, `${target.name}.png`));

    // Create ICO
    await sharp(svgBuffer)
      .resize(32, 32)
      .toFile(path.join(target.path, 'favicon.ico'));
  }
}

generateIcons().catch(console.error); 