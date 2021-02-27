const controller = require('./habit.controller');

module.exports = (Router) => {
  const router = new Router({
    prefix: `/habits`,
  });

  router.get('/', controller.list);

  return router;
};
