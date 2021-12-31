const express = require("express");
const server = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const { append } = require("express/lib/response");

const port = process.env.PORT || 1112;

// Gets log details
server.use(logger('dev'));
// Enables Cross-Origin resource sharing
server.use(cors());
// Handles HTTP requests
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const usersRouter = require("./routes/users");
server.use("/users", usersRouter);

server.listen(port, () => {
	console.log(`ThrivingPark is listening on port ${port}...`)
})

module.exports = server;