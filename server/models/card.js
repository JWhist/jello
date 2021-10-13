const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema(
  {
    title: String,
    dueDate: Date,
    labels: [String],
    description: String,
    listId: Schema.Types.ObjectId,
    boardId: Schema.Types.ObjectId,
    position: Number,
    commentsCount: Number,
    completed: Boolean,
    archived: Boolean,
    actions: [{
      type: Schema.Types.ObjectId,
      ref: 'Action'
    }],
    comments: [{
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }],
  },
  { timestamps: true }
);

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;
