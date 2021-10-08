const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  title: String,
  dueDate: Date,
  labels: [String],
  description: String,
  listId: Schema.Types.ObjectId,
  boardId: Schema.Types.ObjectId,
  position: Number,
  commentsCount: Number,
  actions: [Schema.Types.ObjectId],
  comments: [Schema.Types.ObjectId],
});

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;
