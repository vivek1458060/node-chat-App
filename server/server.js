const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname , '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('createMessage', function(message) {
    console.log(message);
  })

  socket.emit('newMessage', {
    from: 'shubham',
    text: 'Tell me if it is showing in browser',
    createdAt: 1234587
  })

  socket.on('disconnect', () => {
     console.log('disconnected from server');
  });
});


app.use(express.static(publicPath));

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
