var cmd = require("node-cmd");
var Promise = require("bluebird");
// import { Promise } from 'bluebird';
const getAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd });

getAsync("npm run format").then(() => {
  getAsync("git diff-files").then(data => {
    if (data.length) {
      console.log(data, data.length);
      console.log("There were eslint changes, check and commit again.");
    } else {
      cmd.run('git commit -m "ciao"');
      cmd.run("npm version patch");
      console.log("Verion updated");
      cmd.run("git add package.json");
      cmd.run('git commit -m "release"');
    }
  });
});

// let value;
// async function CaretPosition() {
//     let a = await cmd.get(
//         'git diff-files',
//         function(err, data, stderr) {
//             if (data.length) {
//                 console.log('There were eslint changes, check and commit again.');
//                 return 0;
//                 value = 0;
//             }
//             value = 1;
//             return 1;
//         }
//     );
//     return a;
// }
// console.log(value);
// if (CaretPosition()) {
//     console.log(value);
//     console.log('entered');
// } else {
//     console.log('exited');
// }
// cmd.run('npm format');

// cmd.run('git diff-files');

// cmd.get(
//     'git diff-files',
//     function(err, data, stderr) {
//         console.log('Files:', data);
//         console.log('data length1: ', data.length);
//         if (data.length) {
//             console.log('There were eslint changes, check and commit again.');
//             return 0;
//         }
//         return 1;
//     }
// );

// cmd.run('git commit -m "ciao"');
// cmd.run('npm version patch');

// cmd.run('git add package.json');
// cmd.run('git commit -m "release"');

// run npm format
// wait
// git check if changes
// wait
// if bad exit 0
// commit with message

// npm version patch
// commit -m "Release vx.x.x"
