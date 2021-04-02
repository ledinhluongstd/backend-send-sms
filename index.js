const express = require('express');
const socketIO = require('socket.io');
const app = express();
const server = require('http').Server(app);

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views')))
app.get('/', function (req, res) {
  res.render('index');
});

app.listen(port, function () {
  console.log('Our app is running on http://localhost:' + port);
});


/**
 *  SOCKET.IO
 */

let nextVisitorNumber = 1;
const onlineClients = new Set();
const io = socketIO(server);

io.on("connection", onNewWebsocketConnection);

function onNewWebsocketConnection(socket) {
  console.info(`Socket ${socket.id} has connected.`);
  onlineClients.add(socket.id);

  socket.on("disconnect", () => {
    onlineClients.delete(socket.id);
    console.info(`Socket ${socket.id} has disconnected.`);
  });

  // echoes on the terminal every "hello" message this socket sends
  socket.on("hello", helloMsg => console.info(`Socket ${socket.id} says: "${helloMsg}"`));

  // will send a message only to this socket (different than using `io.emit()`, which would broadcast it)
  socket.emit("welcome", `Welcome! You are visitor number ${nextVisitorNumber++}`);

  socket.on("send sms", data => {
    console.log(data);
    io.emit("client send sms", data);
  });
}

let secondsSinceServerStarted = 0;
setInterval(() => {
  secondsSinceServerStarted++;
  io.emit("seconds", secondsSinceServerStarted);
  io.emit("online", onlineClients.size);
}, 1000);

