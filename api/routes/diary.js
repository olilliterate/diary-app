const { Router } = require('express');
const diaryController = require('../controllers/diary');
const diaryRouter = Router()

diaryRouter.get("/", diaryController.index);
diaryRouter.get("/:id", diaryController.getEntryById);
diaryRouter.post("/", diaryController.createEntry);
diaryRouter.patch("/:id", diaryController.updateEntryById);
diaryRouter.delete("/:id", diaryController.deleteEntryById);

module.exports = diaryRouter