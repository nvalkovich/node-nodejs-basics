import { rename as fsRename } from 'node:fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const rename = async () => {
    const fileDir = 'files'
    const oldFileName = 'wrongFilename.txt';
    const newFileName = 'properFilename.md';

    const pathToOldFile = path.join(__dirname, fileDir, oldFileName);
    const pathToNewFile = path.join(__dirname, fileDir, newFileName);

    try {
        await fsRename(pathToOldFile, pathToNewFile);
    } catch {
        throw new Error ('FS operation failed');
    } 
};

await rename();