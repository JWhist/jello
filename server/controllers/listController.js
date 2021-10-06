const List = require("../models/list");
const Board = require("../models/board");
const HttpError = require("../models/httpError");
const { ObjectId } = require("mongodb");

const createList = (req, res, next) => {
  const boardId = req.body.boardId;
  if (!boardId) {
    res.status(404).json({ error: "Board id must be included" });
  } else if (!req.body.list.title) {
    res.status(422).json({ error: "List must have a title" });
  }

  const newList = { boardId: boardId, title: req.body.list.title };

  List.create(newList)
    .then((list) => {
      console.log(list);
      Board.findOneAndUpdate(
        { _id: ObjectId(list.BoardId) },
        { lists: list._id },
        () => res.json(list)
      );
    })
    .catch((err) =>
      next(new HttpError("Creating board failed, please try again", 500))
    );
};

exports.createList = createList;
