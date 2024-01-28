import { Transform } from 'stream';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, enc, callback) { 
            const stringifiedChunk = chunk.toString().trim();
            const reversedChank = stringifiedChunk.split('').reverse().join('');
            this.push(reversedChank); 
            callback();
        }
    })
        
    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();