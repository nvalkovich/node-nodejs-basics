import { Worker } from 'worker_threads';
import os from "os";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const cpuNumber = os.cpus().length;

const createWorkers = (number) => {
    const workerFileName = 'worker.js';
    const pathToWorker = join(__dirname, workerFileName);

    return new Promise((resolve, reject) => {
        const worker = new Worker(pathToWorker, {
            workerData: number,
        });
  
        worker.on('message', (data) =>  {
            resolve({ status: 'resolved' , data });
        })

        worker.on('error', () =>  {
            reject({ status: 'error' , data: null })
        })
    })
}

const performCalculations = async () => {
    const number = 10;
    const workerPromises = [];

    for (let i = 0; i < cpuNumber; i++) {
        workerPromises.push(createWorkers(number + i));
    }

    const results = await Promise.allSettled(workerPromises);
    console.log(results.map((result) => result.value ?? result.reason));
};

await performCalculations();