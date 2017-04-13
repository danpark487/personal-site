const http = require('http');
const express = require('express');
const path = require('path');

// create a server
const app = express();
const server = http.createServer(app);

// static middleware
const rootPath = path.join(__dirname, '..');
const srcPath = path.join(rootPath, 'src');
const publicPath = path.join(rootPath, 'public');

app.use(express.static(rootPath));
app.use(express.static(srcPath));
app.use(express.static(publicPath));

// default error-handling
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message);
});

// start the server
server.listen(1487, () => {
  console.log('Server listening on PORT 1487');
});
