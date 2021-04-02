import app from './server';
import http from 'http';
import { PORT } from './config/setup';

let debug = require('debug')(
  `${require(__dirname + '/package.json').name}:server`
);

/**
 * Get port from environment and store in Express.
 */

let port = normalizePort(process.env.PORT || PORT);
app.set('port', port);

/**
 * Create HTTP server.
 */

let server = http.createServer(app);


/**
 *  SOCKET.IO
 */

let nextVisitorNumber = 1;
const onlineClients = new Set();
var io = require("socket.io")(server);
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

// let secondsSinceServerStarted = 0;
// setInterval(() => {
//   secondsSinceServerStarted++;
//   io.emit("seconds", secondsSinceServerStarted);
//   io.emit("online", onlineClients.size);
// }, 1000);



/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      process.exit(1);
      break;
    case 'EADDRINUSE':
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  console.log(
    `Server ${require(__dirname + '/package.json').name} run on ` + port
  );
  let addr = server.address();
  let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}