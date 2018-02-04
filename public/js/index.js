var socket = io();

socket.on('connect', () => {
   console.log('connected to server');
});

socket.on('disconnect', function()  {
   console.log('disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log(message);
});
