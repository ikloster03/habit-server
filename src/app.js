const Koa = require('koa');
const koaBody = require('koa-body');
const compress = require('koa-compress');
const cors = require('@koa/cors');
const helmet = require('koa-helmet');

const errorHandler = require('./middlewares/error.middleware');
const bootstrapRoutes = require('./components');

const app = new Koa();

app.use(errorHandler);
app.use(helmet());
app.use(compress());
app.use(cors());
app.use(koaBody());

bootstrapRoutes(app);

module.exports = app;
