const Card = require("../models/card");
const HttpError = require("../models/httpError");
// const { createAction } = require("./actionController");

const getCard = (req, res, next) => {
  const id = req.params.id;
  Card.findById(id)
    // .populate("actions")
    // .populate("comments")
    .then((card) => {
      res.json(card);
    })
    .catch((err) => {
      next(new HttpError("Card not found", 404));
    });
};

const createCard = (req, res, next) => {
  const title = req.body.card.title.trim();
  if (!title) {
    res
      .status(422)
      .json({ error: "Unprocessable entity - card must have a title" });
    return;
  }

  const newCard = {
    listId: req.body.listId,
    title: title,
    description: req.body.card.description,
  };

  Card.create(newCard)
    .then((card) => {
      req.body.card = card;
      console.log(req.body.card);
    })
    .then(() => next())
    .catch((err) => {
      next(new HttpError("Creating card failed, please try again", 500));
    });
};

const sendCard = (req, res, next) => {
  res.json(req.body.card);
};

exports.getCard = getCard;
exports.createCard = createCard;
exports.sendCard = sendCard;
