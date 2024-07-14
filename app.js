const express = require("express")
const app = express()
const http = require("http");
const port = 3000

const socketio = require("socket.io");

const server = http.createServer(app);

const io = socketio(server);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

server.listen(port);