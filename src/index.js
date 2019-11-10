var cmd = require("node-cmd");

cmd.run('npm format');

cmd.run('git diff-files');

cmd.get(
    'git diff-files',
    function(err, data, stderr) {
        console.log('Files:', data);
        console.log('data length1: ', data.length);
        if (data.length) {
            console.log('There were eslint changes, check and commit again.');
            return 0;
        }
        return 1;
    }
);

cmd.run('git commit -m "ciao"');
cmd.run('npm version patch');

cmd.run('git add package.json');
cmd.run('git commit -m "release"');



// run npm format
// git check if changes
// if bad exit 0
// commit with message

// npm version patch
// commit -m "Release vx.x.x"