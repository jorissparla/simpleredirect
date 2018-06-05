require('dotenv').config();

const express = require('express');

const app = express();
const server = express();

const { SERVER1, SERVER2 } = process.env;
app.get('*', (req, res) => {
  //res.send('Main routes')
  res.redirect(SERVER1 || 'http://nlbavwixs.infor.com:3000');
});

server.get('*', (req, res) => {
  //res.send('Main routes')
  res.redirect(SERVER2 || 'http://nlbavwixs.infor.com/ixs');
});

app.listen(3000, () => console.log('Listening on port 3000'));
server.listen(80, () => console.log('Server listening at port 80'));
