const { validationResult } = require("express-validator");
const Card = require("../models/card");
const HttpError = require("../models/httpError");
const { addCardToList } = require("./listController");

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
    })
    .then(() => next())
    .catch((err) => {
      next(new HttpError("Creating card failed, please try again", 500));
    });
};

const sendCard = (req, res, next) => {
  res.json(req.body.card);
};

const addCommentToCard = (req, res, next) => {
  const cardId = req.body.cardId;
  Card.findByIdAndUpdate(cardId, {
    $addToSet: { comments: req.body._id },
  })
    .then(() => next())
    .catch((err) => {
      next(new HttpError("Adding comment to card failed", 500));
    });
};

const validateCardId = (req, res, next) => {
  const cardId = req.body.cardId;
  Card.findById(cardId)
    .then(() => next())
    .catch((err) => {
      return next(new HttpError("Card not found", 404));
    });
};

exports.getCard = getCard;
exports.createCard = createCard;
exports.sendCard = sendCard;
exports.addCommentToCard = addCommentToCard;
exports.validateCardId = validateCardId;
