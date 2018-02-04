const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message.js');
const publicPath = path.join(__dirname , '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to chat Room'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'))

  socket.on('createMessage', function(message) {
    console.log('newMessage', message);

    io.emit('newMessage', generateMessage(message.from, message.text));

    //socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));
  });

  socket.on('disconnect', () => {
     console.log('disconnected from server');
  });
});


app.use(express.static(publicPath));

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
