const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ListSchema = require('./list');

const BoardSchema = new Schema({
  title: {
    type: String,
    required: [true, 'The Board title is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  lists: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ListSchema'
  }]
})

const Board = mongoose.model('Board', BoardSchema);

module.exports = Board;