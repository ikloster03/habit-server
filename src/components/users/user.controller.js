const { next } = require('../../helpers');
const {
  getUser,
  createUser,
  getUserList,
  updateUser,
  removeUser,
} = require('./user.service');

exports.list = async (ctx) => {
  const users = await getUserList();

  next(ctx, users);
};

exports.create = async (ctx) => {
  const body = ctx.request.body;
  const user = await createUser(body);

  next(ctx, user);
};

exports.read = async (ctx) => {
  const id = ctx.params.id;
  const user = await getUser(id);

  next(ctx, user);
};

exports.update = async (ctx) => {
  const id = ctx.params.id;
  const body = ctx.request.body;
  const user = await updateUser(id, body);

  next(ctx, user);
};

exports.remove = async (ctx) => {
  const id = ctx.params.id;
  const user = await removeUser(id);

  next(ctx, user);
};
