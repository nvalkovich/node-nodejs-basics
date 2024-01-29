import { createGunzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
    const fileDir = 'files'
    const sourceFileName = 'archive.gz';
    const destFileName = 'fileToCompress.txt';

    const pathToSourceFile = path.join(__dirname, fileDir, sourceFileName);
    const pathToDestFile = path.join(__dirname, fileDir, destFileName);

    const gunzip = createGunzip();
    const source = createReadStream(pathToSourceFile);
    const destination = createWriteStream(pathToDestFile);

    source.pipe(gunzip).pipe(destination);
};

await decompress();
