const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  title: String,
  boardId: Schema.Types.ObjectId,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
  },
  position: Number,
  cards: [{
    type: Schema.Types.ObjectId,
    ref: 'Card'
  }]
});

const List = mongoose.model('List', ListSchema);

module.exports = List;