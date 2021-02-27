const Router = require('koa-router');
const config = require('../configs/env');
const habitRoute = require('./habits/habit.routes')

function bootstrapRoutes(app) {
  const unprotectedRoutes = new Router();
  const protectedRoutes = new Router({
    prefix: `/api/v${config.apiVersion}`,
  });

  protectedRoutes.use(habitRoute(Router).routes());

  app.use(unprotectedRoutes.routes());
  app.use(protectedRoutes.routes());

  app.use(unprotectedRoutes.allowedMethods());
  app.use(protectedRoutes.allowedMethods());
}

module.exports = bootstrapRoutes;
