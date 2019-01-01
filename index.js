require('dotenv').config()

const API_TOKEN = process.env.API_TOKEN;
const API_SESSION = process.env.API_SESSION;

const express = require('express');
const app = express();
const ai = require('apiai')(API_TOKEN);
//const io = require('socket.io');.var io = require('socket.io')(http);

const socket = io();

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

const server = app.listen(5000);
app.get('/', (req, res) => {
  res.sendFile('index.html');
});
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('socket connection');

  socket.on('message', (text) => {
    console.log('socket message');

    let aiReq = ai.textRequest(text, {
      sessionId: API_SESSION
    });

    aiReq.on('response', (response) => {
      console.log('socket response');

      let aiText = response.result.fullfillment.speech;
      socket.emit('bot reply', aiText);
    });

    aiReq.on('error', (error) => {
      console.log('socket error');

      console.log(error);
    });

    aiReq.end();
  });
});
