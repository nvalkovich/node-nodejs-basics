import { createReadStream } from 'node:fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const fileDir = 'files'
    const fileName = 'fileToRead.txt';
    const pathToFile = path.join(__dirname, fileDir, fileName);

    const readableStream = createReadStream(pathToFile);
    readableStream.pipe(process.stdout);
};

await read();