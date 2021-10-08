const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActionSchema = new Schema(
  {
    description: String,
    card_id: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

const Action = mongoose.model("Action", ActionSchema);

module.exports = Action;
