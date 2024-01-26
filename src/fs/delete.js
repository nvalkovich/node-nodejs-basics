import { unlink } from 'node:fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
    const fileDir = 'files'
    const fileName = 'fileToRemove.txt';

    const pathToFile = path.join(__dirname, fileDir, fileName);

    try {
        await unlink(pathToFile);
    } catch {
        throw new Error ('FS operation failed');
    } 
};

await remove();