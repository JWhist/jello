const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ListSchema = require("./list");

const BoardSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "The Board title is required"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
    },
    lists: [
      {
        type: Schema.Types.ObjectId,
        ref: "List",
      },
    ],
  },
  { strict: false }
);

const Board = mongoose.model("Board", BoardSchema);

module.exports = Board;
