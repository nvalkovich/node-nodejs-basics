import { readFile } from 'node:fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const fileDir = 'files';
    const fileName = 'fileToRead.txt';

    const pathToFile = join(__dirname, fileDir, fileName);

    try {
        const data = await readFile(pathToFile, {
            encoding: 'utf8',
        });
        
        console.log(data);
    } catch {
        throw new Error ('FS operation failed');
    } 
};

await read();