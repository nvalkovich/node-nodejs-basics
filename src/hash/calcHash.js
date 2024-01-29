import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
    const fileDir = 'files';
    const fileName = 'fileToCalculateHashFor.txt';
    const pathToFile = join(__dirname, fileDir, fileName);

    const hash = createHash('sha256');

    const rs = createReadStream(pathToFile);

    rs.on('readable', () => {
        const data = rs.read();

        if (data)  {
            hash.update(data);
        } else {
            process.stdout.write(`${hash.digest('hex')}`);
        }
    });
};

await calculateHash();