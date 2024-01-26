import { readdir, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const copy = async () => {
    const sourceDir = 'files';
    const copyDir = 'files_copy'

    const pathToSourceDir = path.join(__dirname, sourceDir);
    const pathToCopyDir = path.join(__dirname, copyDir);

    try {
        await mkdir(pathToCopyDir);

        const files = await readdir(pathToSourceDir);

        for (const file of files){
            const fileName = file;
            const pathToFile = path.join(pathToSourceDir, fileName);
    
            const data = await readFile(pathToFile, {
                encoding: 'utf8',
            });
    
            await writeFile(path.join(pathToCopyDir, fileName), data);
        }
    } catch (err) {
        throw new Error ('FS operation failed')
    }
}

await copy();
