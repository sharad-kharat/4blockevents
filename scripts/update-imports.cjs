const fs = require('fs');
const path = require('path');

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

const dirToScan = path.join(__dirname, '../src');

walkDir(dirToScan, (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    if (ext === '.jsx' || ext === '.tsx' || ext === '.css' || ext === '.js') {
        let content = fs.readFileSync(filePath, 'utf-8');
        
        let newContent = content;
        // Basic naive string replacements for the extensions inside the src dir.
        // It's safe since all matched original images have a new .webp
        newContent = newContent.replace(/\.png/g, '.webp');
        newContent = newContent.replace(/\.jpg/g, '.webp');
        newContent = newContent.replace(/\.jpeg/g, '.webp');

        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent, 'utf-8');
            console.log(`Updated imports in: ${path.basename(filePath)}`);
        }
    }
});

console.log('Update imports complete!');
