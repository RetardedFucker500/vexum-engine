const { exec } = require('child_process');

exec('node index.js', (err, stdout, stderr) => {
    if (err) {
        console.error(`Error: ${err}`);
        return;
    }
    console.log(stdout);

    exec('node three.js', (err, stdout, stderr) => {
        if (err) {
            console.error(`Error: ${err}`);
            return;
        }
        console.log(stdout);
    });
});
