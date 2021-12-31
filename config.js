const {
  parsed: {MONGO_DB_USERNAME, MONGO_DB_PASSWORD},
} = require('dotenv').config();

const dbURLString = `mongodb+srv://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@cluster0.ylhpn.mongodb.net/users?retryWrites=true&w=majority`;

console.log(dbURLString);
const config = {
  dbUrl: dbURLString,
};

module.exports = config;
