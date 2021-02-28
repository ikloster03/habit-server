const Habit = require('./habit.model');

exports.getHabitList = async () => {
  return Habit.find({}).exec();
};

exports.createHabit = async (payload) => {
  const habit = new Habit(payload);
  await habit.save();

  return habit;
};

exports.getHabit = async (id) => {
  return Habit.findById(id).exec();
};

exports.updateHabit = async (id, payload) => {
  return Habit.findByIdAndUpdate(id, payload, { new: true }).exec();
};

exports.removeHabit = async (id) => {
  const habit = await Habit.findById(id).exec();

  return new Promise((resolve, reject) => {
    Habit.delete({ id }, () => {
      resolve({
        deleted: true,
        habit: habit,
      });
    });
  });
};
