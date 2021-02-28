const controller = require('./habit.controller');

module.exports = (Router) => {
  const router = new Router({
    prefix: `/habits`,
  });

  router.get('/', controller.list);
  router.post('/', controller.create);
  router.get('/:id', controller.read);
  router.put('/:id', controller.update);
  router.delete('/:id', controller.remove);

  return router;
};
