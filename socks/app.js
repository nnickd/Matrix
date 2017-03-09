var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

http.listen(8000, function() {
  console.log('running');
});

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
  console.log('hi');
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
