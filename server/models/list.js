const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  title: String,
  boardId: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  position: Number,
  cards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CardSchema'
  }]
});

const List = mongoose.model('List', ListSchema);

module.exports = List;