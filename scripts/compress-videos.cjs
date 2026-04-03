const fs = require('fs');
const path = require('path');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

const dirToScan = path.join(__dirname, '../public/images/wedding');

let videoFiles = [];
const files = fs.readdirSync(dirToScan);
for (const file of files) {
    const fullPath = path.join(dirToScan, file);
    const ext = path.extname(fullPath).toLowerCase();
    
    // Only compress .mp4 or .mov that are larger than 10MB to avoid useless double compression
    if (ext === '.mp4' || ext === '.mov') {
        const size = fs.statSync(fullPath).size;
        if (size > 10 * 1024 * 1024) {
             videoFiles.push(fullPath);
        }
    }
}

console.log(`Found ${videoFiles.length} huge videos to compress.`);

async function compressVideo(inputPath) {
    return new Promise((resolve, reject) => {
        const ext = path.extname(inputPath);
        const outputPath = inputPath.replace(ext, '_web' + ext);
        const baseName = path.basename(inputPath);
        
        if (fs.existsSync(outputPath)) {
             console.log(`\n--Skipping ${baseName}, already compressed.`);
             return resolve();
        }

        console.log(`\nStarting aggressive web compression for: ${baseName}`);
        console.log(`Original size: ${(fs.statSync(inputPath).size / 1024 / 1024).toFixed(2)} MB`);
        
        ffmpeg(inputPath)
            .size('?x720')
            .videoCodec('libx264')
            .outputOptions(['-crf 28', '-preset fast'])
            .on('progress', function(progress) {
                process.stdout.write(`\rProcessing ${baseName}: ${Math.floor(progress.percent || 0)}% done`);
            })
            .on('end', function() {
                console.log(`\n--Finished ${baseName}`);
                console.log(`New size: ${(fs.statSync(outputPath).size / 1024 / 1024).toFixed(2)} MB`);
                resolve();
            })
            .on('error', function(err) {
                console.log(`\n--Error processing ${baseName}: ${err.message}`);
                if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
                resolve(); 
            })
            .save(outputPath);
    });
}

async function runAll() {
    for (const vid of videoFiles) {
        await compressVideo(vid);
    }
    console.log('\nAll massive videos have been successfully compressed for web delivery!');
}

runAll();
