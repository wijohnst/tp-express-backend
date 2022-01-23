const express = require('express');
const server = express();
const cors = require('cors');
const logger = require('morgan');
const mongoose = require('mongoose');

const port = process.env.PORT || 1112;
const config = require('./config');

const usersRouter = require('./routes/users');
const userInfoRouter = require('./routes/userInfo');

// Gets log details
server.use(logger('dev'));

const dbUrl = config.dbUrl;

const options = {
  keepAlive: 1,
  connectTimeoutMS: 30000,
};

mongoose.connect(dbUrl, options, (error) => {
  if (error) console.log(error);
  else console.log('Connected to Mongo DB...');
});

// Enables Cross-Origin resource sharing
server.use(cors());
// Handles HTTP request body (replaced `body-parser`)
server.use(express.json());
server.use('/users', usersRouter);
server.use('/user_info', userInfoRouter);

server.listen(port, () => {
  console.log(`ThrivingPark is listening on port ${port}...`);
});

module.exports = server;
