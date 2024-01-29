import { createReadStream } from 'node:fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { join } from 'node:path';
import { pipeline } from 'node:stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const fileDir = 'files';
    const fileName = 'fileToRead.txt';
    const pathToFile = join(__dirname, fileDir, fileName);

    const readableStream = createReadStream(pathToFile);

    await pipeline(readableStream, process.stdout);
};

await read();