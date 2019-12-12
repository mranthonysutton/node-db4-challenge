const express = require("express");
const server = express();

server.use(express.json());

server.use("/", (req, res) => {
  res.send({ message: "Recipe API is running..." });
});

module.exports = server;