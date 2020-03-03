const mongoose = require('mongoose');

const { Schema } = mongoose;

const TodoSchema = new Schema(
  {
    body: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Todo', TodoSchema);
