const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dirsToScan = ['../src/assets', '../public'];

function walkDir(dir, callback) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath, callback);
        } else {
            callback(fullPath);
        }
    }
}

let imageFiles = [];

dirsToScan.forEach(dir => {
    walkDir(path.join(__dirname, dir), (filePath) => {
        const ext = path.extname(filePath).toLowerCase();
        if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
            imageFiles.push(filePath);
        }
    });
});

console.log(`Found ${imageFiles.length} images to convert.`);

for (let i = 0; i < imageFiles.length; i++) {
    const filePath = imageFiles[i];
    const ext = path.extname(filePath);
    const webpPath = filePath.substring(0, filePath.length - ext.length) + '.webp';
    
    console.log(`[${i+1}/${imageFiles.length}] Re-converting: ${path.basename(filePath)} (Preserving EXIF orientation)`);
    try {
        // -metadata exif preserves camera rotation angles!
        execSync(`npx -y cwebp-bin -metadata exif -q 75 "${filePath}" -o "${webpPath}"`, { stdio: 'inherit' });
    } catch (e) {
        console.error(`Error converting ${filePath}`, e.message);
    }
}

console.log('Conversion complete!');
