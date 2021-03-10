const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    seeded: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

UserSchema.pre(
  'save',
  async function(next) {
    const user = this;
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
    next();
  }
);


UserSchema.methods.isValidPassword = async function(password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
}

UserSchema.plugin(mongooseDelete, { indexFields: true, overrideMethods: true });

module.exports = mongoose.model('User', UserSchema);
