const List = require("../models/list");
const Board = require("../models/board");
const HttpError = require("../models/httpError");

const createList = (req, res, next) => {
  const boardId = req.body.boardId;
  if (!boardId) {
    res.status(404).json({ error: "Board id must be included" });
  } else if (!req.body.list.title) {
    res.status(422).json({ error: "List must have a title" });
  }

  const newList = { boardId: boardId, title: req.body.list.title };

  List.create(newList)
    .then(async (list) => {
      let board = await Board.findById(list.boardId);
      let newLists = [...board.lists, list];
      Board.findByIdAndUpdate(list.boardId, { lists: newLists }, () =>
        res.json(list)
      );
    })
    .catch((err) =>
      next(new HttpError("Creating board failed, please try again", 500))
    );
};

const updateList = (req, res, next) => {
  const id = req.params.id;
  const updateTitle = req.body.title;
  const updatePosition = req.body.position;

  if (!updateTitle && !updatePosition) {
    res.status(422).json({ error: "Title or position are required" });
  }

  List.findById(id)
    .then((list) => {
      const updateList = {
        title: updateTitle || list.title,
        position: updatePosition || list.position,
      };

      List.findByIdAndUpdate(id, updateList, { new: true }).then((list) => {
        res.json(list);
      });
    })
    .catch((err) => {
      next(new HttpError("List not found", 404));
    });
};

const addCardToList = (req, res, next) => {
  console.log(req.body);
  const listId = req.body.card.listId;
  List.findByIdAndUpdate(listId, {
    $addToSet: { cards: req.body.card._id },
  })
    .then(() => next())
    .catch((err) => {
      next(new HttpError("Adding card to list failed", 500));
    });
};

exports.createList = createList;
exports.updateList = updateList;
exports.addCardToList = addCardToList;
