import { writeFile } from 'node:fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const create = async () => {
    const fileName = 'fresh.txt';
    const fileDir = 'files';
    const data = 'I am fresh and young';

    const pathToFile = path.join(__dirname, fileDir, fileName);

    try { 
        await writeFile(pathToFile, data, { flag: 'wx' });
    } catch (err) {
        throw new Error ('FS operation failed');
    }
}


await create();