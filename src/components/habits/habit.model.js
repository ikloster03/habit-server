const mongoose = require('mongoose');
const slugify = require('slugify');
const mongooseDelete = require('mongoose-delete');

const HabitSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    color: String,
    dates: [String],
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

HabitSchema.virtual('slug').get(function () {
  return slugify(this.title, {
    replacement: '-',
    lower: true,
    locale: 'ru',
  });
});

HabitSchema.plugin(mongooseDelete, { indexFields: true, overrideMethods: true });

module.exports = mongoose.model('Habit', HabitSchema);
