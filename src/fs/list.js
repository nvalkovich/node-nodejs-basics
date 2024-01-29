import { readdir } from 'node:fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
    const filesDir = 'files';
    const pathToFilesDir = join(__dirname, filesDir);
    
    try {
        const files = await readdir(pathToFilesDir);
        console.log(files);
    } catch {
        throw new Error ('FS operation failed');
    }
};

await list();