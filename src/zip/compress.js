import {createGzip} from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
    const fileDir = 'files'
    const sourceFileName = 'fileToCompress.txt';
    const destFileName = 'archive.gz';

    const pathToSourceFile = path.join(__dirname, fileDir, sourceFileName);
    const pathToDestFile = path.join(__dirname, fileDir, destFileName);

    const gzip = createGzip();
    const source = createReadStream(pathToSourceFile);
    const destination = createWriteStream(pathToDestFile);

    source.pipe(gzip).pipe(destination);
};

await compress();