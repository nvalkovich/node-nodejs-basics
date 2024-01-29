import { createGunzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { join } from 'node:path';
import { pipeline } from 'node:stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
    const fileDir = 'files';
    const sourceFileName = 'archive.gz';
    const destFileName = 'fileToCompress.txt';

    const pathToSourceFile = join(__dirname, fileDir, sourceFileName);
    const pathToDestFile = join(__dirname, fileDir, destFileName);

    const gunzip = createGunzip();
    const source = createReadStream(pathToSourceFile);
    const destination = createWriteStream(pathToDestFile);

    await pipeline(source, gunzip, destination);
};

await decompress();
