import { Transform } from 'stream';
import { pipeline } from 'node:stream/promises';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, enc, callback) { 
            const stringifiedChunk = chunk.toString().trim();
            const reversedChank = stringifiedChunk.split('').reverse().join('');
            this.push(reversedChank); 
            callback();
        }
    })
    
    await pipeline(process.stdin, transformStream, process.stdout);
};

await transform();