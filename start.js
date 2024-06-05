const { spawn } = require('child_process');

const ngServe = spawn('ng', ['serve']);
const ngLint = spawn('ng', ['lint', '--watch']);

const logOutput = (name, data) => {
  const message = data.toString();
  console.log(`[${name}] ${message}`);
};

ngServe.stdout.on('data', (data) => logOutput('ng serve', data));
ngServe.stderr.on('data', (data) => logOutput('ng serve', data));
ngLint.stdout.on('data', (data) => logOutput('ng lint', data));
ngLint.stderr.on('data', (data) => logOutput('ng lint', data));

ngServe.on('close', (code) => {
  console.log(`ng serve process exited with code ${code}`);
});

ngLint.on('close', (code) => {
  console.log(`ng lint process exited with code ${code}`);
});
