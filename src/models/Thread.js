const mongoose = require('mongoose')

const { Schema } = mongoose
const User = require('../models/User')

const CommentSchema = new Schema({
  comment: {
    type: String,
    trim: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const ThreadSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  img: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  comments: [CommentSchema]
})

module.exports = mongoose.model('Thread', ThreadSchema)
