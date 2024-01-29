import { rename as fsRename, access, constants } from 'node:fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const isFileExist = async (pathToFile) => {
    try {
        await access(pathToFile, constants.F_OK);
        return true;
    } catch (err) {
        if (err.code === 'ENOENT') return false;
        throw err;
    }
}

const rename = async () => {
    const fileDir = 'files';
    const oldFileName = 'wrongFilename.txt';
    const newFileName = 'properFilename.md';

    const pathToOldFile = join(__dirname, fileDir, oldFileName);
    const pathToNewFile = join(__dirname, fileDir, newFileName);

    try {
        if (await isFileExist(pathToNewFile)) {
            throw new Error ();
        }

        await fsRename(pathToOldFile, pathToNewFile);
    } catch {
        throw new Error ('FS operation failed');
    } 
};

await rename();