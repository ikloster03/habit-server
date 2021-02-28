const {
  removeHabit,
  updateHabit,
  getHabit,
  createHabit,
  getHabitList,
} = require('./habit.service');

const next = (ctx, payload) => {
  ctx.status = 200;
  ctx.body = payload;
};

exports.list = async (ctx) => {
  const habits = await getHabitList();

  next(ctx, habits);
};

exports.create = async (ctx) => {
  const body = ctx.request.body;
  const habit = await createHabit(body);

  next(ctx, habit);
};

exports.read = async (ctx) => {
  const id = ctx.params.id;
  const habit = await getHabit(id);

  next(ctx, habit);
};

exports.update = async (ctx) => {
  const id = ctx.params.id;
  const body = ctx.request.body;
  const habit = await updateHabit(id, body);

  next(ctx, habit);
};

exports.remove = async (ctx) => {
  const id = ctx.params.id;
  const habit = await removeHabit(id);

  next(ctx, habit);
};
