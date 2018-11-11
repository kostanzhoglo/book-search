const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const server = express();

server.get('/', (req, res) => {
  res.send('Hello, McFly, anybody home?');
});

server.listen(3001, () => {
  console.log('Server started on Port 3001...')
})
