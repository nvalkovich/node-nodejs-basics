const parseArgs = () => {
    const prefix = '--';
    const result = [];

    process.argv.forEach((value, index) => {
        if (value.startsWith(prefix)) {
            result.push(`${value.slice(prefix.length)} is ${process.argv[index + 1]}`);
        }
    });

    console.log(result.join(', '));
};

parseArgs();