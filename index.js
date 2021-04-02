var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
// app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function (req, res) {

  // ejs render automatically looks in the views folder
  res.render('index');
});



/**
 *  SOCKET.IO
 */

let nextVisitorNumber = 1;
const onlineClients = new Set();
var io = require("socket.io")(app);
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


app.listen(port, function () {
  console.log('Our app is running on http://localhost:' + port);
});