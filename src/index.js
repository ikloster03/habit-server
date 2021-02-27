const http = require('http');
const app = require('./app');
const config = require('./configs/env');
const connectToDB = require('./configs/database');

async function bootstrap() {
  connectToDB();
  return http.createServer(app.callback()).listen(config.port);
}

(async () => {
  const server = await bootstrap().catch((err) => {
    setImmediate(() => {
      console.error('Unable to run the server because of the following error:');
      console.error(err);
      process.exit(1);
    });
  });
  console.log(`🚀 Server listening on port ${server.address().port}!`);
})();
