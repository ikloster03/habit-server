const mongoose = require('mongoose');
const config = require('./env');

const connectToDB = () => {
  const {
    mongo: { username, password, hostname, port, db },
  } = config;
  const mongodbURI = `mongodb://${username}:${password}@${hostname}:${port}/${db}`;

  mongoose.connect(mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });
};

module.exports = connectToDB;
