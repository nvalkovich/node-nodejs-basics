import { readdir, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const copy = async () => {
    const sourceDir = 'files';
    const copyDir = 'files_copy';

    const pathToSourceDir = join(__dirname, sourceDir);
    const pathToCopyDir = join(__dirname, copyDir);

    try {
        const files = await readdir(pathToSourceDir);

        await mkdir(pathToCopyDir);

        for (const file of files) {
            const fileName = file;
            const pathToFile = join(pathToSourceDir, fileName);
    
            const data = await readFile(pathToFile, {
                encoding: 'utf8',
            });
    
            await writeFile(join(pathToCopyDir, fileName), data);
        }
    } catch {
        throw new Error ('FS operation failed');
    }
}

await copy();
