import { fork } from 'child_process';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
    const fileDir = 'files'
    const fileName = 'script.js';
    const pathToFile = path.join(__dirname, fileDir, fileName);

    fork(pathToFile, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3' ]);
