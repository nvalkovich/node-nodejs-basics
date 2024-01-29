import { createWriteStream } from 'node:fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { join } from 'node:path';
import { pipeline } from 'node:stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
    const fileDir = 'files';
    const fileName = 'fileToWrite.txt';
    const pathToFile = join(__dirname, fileDir, fileName);

    const writableStream = createWriteStream(pathToFile);
    
    await pipeline(process.stdin, writableStream);
};

await write();