var socket = io();

socket.on('connect', () => {
   console.log('connected to server');

   socket.emit('createMessage', {
     from: 'vivek',
     text: "Hii,let me tell if it's working"
   })
});

socket.on('disconnect', function()  {
   console.log('disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log(message);
})
