const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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

const dirToScan = path.join(__dirname, '../public/images/wedding');

let imageFiles = [];
walkDir(dirToScan, (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
        imageFiles.push(filePath);
    }
});

console.log(`Found ${imageFiles.length} images to aggressively resize.`);

let totalSaved = 0;

for (let i = 0; i < imageFiles.length; i++) {
    const filePath = imageFiles[i];
    const ext = path.extname(filePath);
    const webpPath = filePath.substring(0, filePath.length - ext.length) + '.webp';
    
    // Check original size to calculate savings
    let oldWebpSize = 0;
    if (fs.existsSync(webpPath)) {
        oldWebpSize = fs.statSync(webpPath).size;
    }

    console.log(`[${i+1}/${imageFiles.length}] Resizing: ${path.basename(filePath)}`);
    try {
        // -resize 1600 0 (width 1600, height auto), -metadata exif
        execSync(`npx -y cwebp-bin -metadata exif -resize 1600 0 -q 75 "${filePath}" -o "${webpPath}"`, { stdio: 'pipe' });
        
        const newWebpSize = fs.statSync(webpPath).size;
        if (oldWebpSize > 0) {
            const saved = oldWebpSize - newWebpSize;
            if (saved > 0) {
               totalSaved += saved;
            }
        }
    } catch (e) {
        console.error(`Error converting ${filePath}`, e.message);
    }
}

console.log(`Finished resizing all images! Saved an estimated ${(totalSaved / 1024 / 1024).toFixed(2)} MB of bandwidth payload!`);
