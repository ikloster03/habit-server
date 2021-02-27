const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  apiVersion: process.env.API_VERSION,
  port: process.env.PORT,
  mongo: {
    hostname: process.env.MONGO_HOSTNAME,
    port: process.env.MONGO_PORT,
    db: process.env.MONGO_DB,
    username: process.env.MONGO_USERNAME,
    password: process.env.MONGO_PASSWORD,
  }
};
