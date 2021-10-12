const HttpError = require("../models/httpError");
const Comment = require("../models/comment");

const createComment = (req, res, next) => {
  const cardId = req.body.cardId;

  const newComment = {
    cardId: cardId,
    text: req.body.comment.text,
  };

  if (req.body.comment.text.trim() === "") {
    return next(new HttpError("No text found", 422));
  }

  Comment.create(newComment)
    .then((comment) => {
      req.body = comment;
    })
    .then(() => next())
    .catch((err) => {
      return next(new HttpError("Problem creating card", 500));
    });
};

const sendComment = (req, res, next) => {
  res.json(req.body);
};

exports.createComment = createComment;
exports.sendComment = sendComment;
