import { createWriteStream } from 'node:fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
    const fileDir = 'files'
    const fileName = 'fileToWrite.txt';
    const pathToFile = path.join(__dirname, fileDir, fileName);

    const writableStream = createWriteStream(pathToFile)
    process.stdin.pipe(writableStream);
};

await write();