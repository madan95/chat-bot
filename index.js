require('dotenv').config()

const API_TOKEN = process.env.API_TOKEN;
const API_SESSION = process.env.API_SESSION;

const express = require('express');
const app = express();
const ai = require('apiai')(API_TOKEN);

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/dist'));

const server = app.listen(80);
app.get('/', (req, res) => {
  res.sendFile('index.html');
});
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('Socket Connection Fired.');
  socket.on('chat message', (text) => {
    console.log('Socket Message from Client: ' + text);

    let aiReq = ai.textRequest(text, {
      sessionId: API_SESSION
    });

    aiReq.on('response', (response) => {
      console.log('Recieved AI Response:');
      console.log(response);
      let aiText = response.result.fulfillment.speech;
      socket.emit('bot reply', aiText);
    });

    aiReq.on('error', (error) => {
      console.log('AI Request error');
      console.log(error);
    });

    aiReq.end();
  });
});
