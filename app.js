const { createServer } = require('http');
const { fork, isMaster } = require('cluster');
const { cpus } = require('os');
const { join } = require('path');
const { statSync, createReadStream } = require('fs');

(() => {
  const numOfCPUs = cpus();
  const PORT = 8080;
  if (isMaster && numOfCPUs && numOfCPUs.length) {
    let i = 0;
    while (i++ < numOfCPUs.length) {
      fork();
    }
    return;
  }

  const server = createServer((req, res) => {});
  
  server.on('request', async (req, res) => {
    const filePath = join(__dirname, 'dist/alpha-vault/index.html');
    const { size } = statSync(filePath);

    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': size
    });

    const stream = createReadStream(filePath);
    stream.pipe(res);
  });

  server.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
})();