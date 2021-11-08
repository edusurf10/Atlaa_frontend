const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 9000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

console.log('API chat server = ' + process.env.REACT_APP_CHATSERVER);
console.log('API back end = ' + process.env.REACT_APP_HOST);
console.log('[Express] Creating a new server na porta: ' + port);
app.listen(port);