const express = require('express');

const app = express();
const server = express();

app.get('*', (req, res) => {
  //res.send('Main routes')
  res.redirect('http://nlbavwixs:3000');
});

server.get('*', (req, res) => {
  //res.send('Main routes')
  res.redirect('http://nlbavwixs/ixs');
});

app.listen(3000, () => console.log('Listening on port 3000'));
server.listen(80, () => console.log('Server listening at port 80'));
