const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  title: String,
  boardId: Schema.Types.ObjectId,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  position: {
    type: Number,
    default: 65535.0,
  },
  cards: [
    {
      type: Schema.Types.ObjectId,
      ref: "Card",
    },
  ],
});

const List = mongoose.model("List", ListSchema);

module.exports = List;
