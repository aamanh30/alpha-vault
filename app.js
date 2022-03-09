const { fork, isMaster } = require('cluster');
const { cpus } = require('os');
const { join } = require('path');
const express = require('express');

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

  const app = express();

  app.use(express.static(join(__dirname, `dist/alpha-vault`)));

  app.get('/', async (req, res) => {
    return res.sendFile(join(__dirname, `dist/alpha-vault/index.html`), err => {
      if (err) {
        console.err(`Server error: `, err);
      }
    });
  });

  app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
})();
