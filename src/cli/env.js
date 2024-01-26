const parseEnv = () => {
    const prefix = 'RSS_';
    const keysWithPrefixes = Object.keys(process.env).filter((key) => key.startsWith(prefix))
    const result = [];
    keysWithPrefixes.forEach((key) => {
        result.push(`${key}=${process.env[key]}`)
    })
    console.log(result.join('; '));
};

parseEnv();