const express = require("express");
const http = require("http");
const path = require("path");


const app = express();

const socketio = require("socket.io");

const server = http.createServer(app);



const io = socketio(server, {
    allowEIO3: true // Enable support for Engine.IO v3 clients
});



app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

//app.use(express.json());

io.on("connection", function(socket){
    socket.on("send-location", function (data){
        io.emit("receive-location", {id: socket.id, ...data});
    })
    socket.on("disconnect", function(){
        io.emit("user-disconnected", socket.id);
    })

});

app.get('/', (req, res) => {
  res.render("index");
});

server.listen(3000);