const Action = require("../models/action");
const HttpError = require("../models/httpError");

const createAction = (req, res, next) => {
  const card_id = req.body.card_id;
  const description = req.body.description;

  if (!card_id || !description) {
    next(
      new HttpError(
        "Unprocessable entity - action must have a cardId and description",
        422
      )
    );
  }

  Action.create(req.body)
    .then(async (action) => {
      const card = await Card.findById(action.card_id);
      const newActions = [...card.actions, action];
      Card.findByIdAndUpdate(card._id, { actions: newActions }, () => {
        res.json(action);
      });
    })
    .catch((err) => {
      next(new HttpError("Creating action failed", 422));
    });
};

exports.createAction = createAction;
