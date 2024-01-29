import {createGzip} from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { join } from 'node:path';
import { pipeline } from 'node:stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
    const fileDir = 'files';
    const sourceFileName = 'fileToCompress.txt';
    const destFileName = 'archive.gz';

    const pathToSourceFile = join(__dirname, fileDir, sourceFileName);
    const pathToDestFile = join(__dirname, fileDir, destFileName);

    const gzip = createGzip();
    const source = createReadStream(pathToSourceFile);
    const destination = createWriteStream(pathToDestFile);

    await pipeline(source, gzip, destination);
};

await compress();