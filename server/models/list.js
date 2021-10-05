const mongoose = require('mongoose');
const CardSchema = require('./card');
const Schema = mongoose.Schema;

/*
      "title": "CSS",
      "boardId": 1,
      "createdAt": "2020-10-04T06:53:39.302Z",
      "updatedAt": "2020-10-04T06:53:39.302Z",
      "position": 65535.0,
      "cards": [
*/

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
  cards: [CardSchema]
});

const List = mongoose.model('List', ListSchema);

module.exports = List;