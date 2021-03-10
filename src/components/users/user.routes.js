const controller = require('./user.controller');

module.exports = (Router) => {
  const router = new Router({
    prefix: `/users`,
  });

  router.get('/', controller.list);
  router.post('/', controller.create);
  router.get('/:id', controller.read);
  router.put('/:id', controller.update);
  router.delete('/:id', controller.remove);

  return router;
};
