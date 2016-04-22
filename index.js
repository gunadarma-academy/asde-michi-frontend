const path = require('path');
const express = require('express');
const app = express();

const HOST = '127.0.0.1';
const PORT = 8000;

app.use(express.static(path.join(__dirname, 'index.html')));
app.use('/dist', express.static(__dirname + '/dist'));

app.listen(PORT, HOST, err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${PORT}`);
});
