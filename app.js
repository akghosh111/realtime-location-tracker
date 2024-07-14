const express = require("express")
const app = express()
const http = require("http");
const path = require("path");
const port = 3000

const socketio = require("socket.io");

const server = http.createServer(app);

const io = socketio(server);

app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

server.listen(port);