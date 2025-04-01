const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "*", // allow all origins
    methods: ["GET", "POST"],
  },
});

const users = {};

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("location", (coords) => {
      users[socket.id] = coords;
      console.log("location", coords);
    io.emit("updateLocations", users);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
