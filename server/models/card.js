const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  title: String,
  dueDate: Date,
  labels: [String],
  description: String,
  listId: Schema.Types.ObjectId,
  boardId: Schema.Types.ObjectId,
  position: Number,
  commentsCount: Number
});

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;