const express = require("express");
const io = require("socket.io");
const cors = require("cors");

const app = express();
const server = app.listen(3000);
const socket = io(server);

app.use(cors());

socket.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("message", (message) => {
    socket.emit("message", [message, message, message]);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(4000, () => {
  console.log("listening on *:3000");
});
