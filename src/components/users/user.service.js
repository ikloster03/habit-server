const User = require('./user.model');

exports.getUserList = async () => {
  return User.find({}).exec();
};

exports.createUser = async (payload) => {
  const user = new User(payload);
  await user.save();

  return user;
};

exports.getUser = async (id) => {
  return User.findById(id).exec();
};

exports.getUserByEmail = async (email) => {
  return User.findOne({ email }).exec();
};

exports.updateUser = async (id, payload) => {
  return User.findByIdAndUpdate(id, payload, { new: true }).exec();
};

exports.removeUser = async (id) => {
  const user = await User.findById(id).exec();

  return new Promise((resolve, reject) => {
    User.delete({ id }, () => {
      resolve({
        deleted: true,
        user: user,
      });
    });
  });
};
