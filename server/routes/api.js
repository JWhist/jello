const express = require("express");
const router = express.Router();
const boardsController = require("../controllers/boardsController");
const listController = require("../controllers/listController");
const cardController = require("../controllers/cardController");
const commentController = require("../controllers/commentController");
const { validateBoard } = require("../validators/validators");

router.get("/boards", boardsController.getBoards);

router.post("/boards", validateBoard, boardsController.createBoard);

router.get("/boards/:id", boardsController.getBoard);

router.post("/lists", listController.createList);

router.put("/lists/:id", listController.updateList);

router.get("/cards/:id", cardController.getCard);

router.put(
  "/cards/:id",
  // actionController.generateActions,
  cardController.updateCard,
  cardController.sendCard
);

router.post(
  "/comments",
  cardController.validateCardId,
  commentController.createComment,
  cardController.addCommentToCard,
  commentController.sendComment
);

router.post(
  "/cards",
  cardController.createCard,
  listController.addCardToList,
  cardController.sendCard
);

module.exports = router;
