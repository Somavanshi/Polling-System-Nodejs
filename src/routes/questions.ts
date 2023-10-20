import express from 'express';
import { createOptionForQuestionId, getQuestionController, questionCreateController, questionDeleteController } from '../controllers/question';

export const QuestionRouter = express.Router();

QuestionRouter.post("/create", questionCreateController);
QuestionRouter.post("/:id/options/create", createOptionForQuestionId);
QuestionRouter.delete("/:id", questionDeleteController);
QuestionRouter.get("/:id", getQuestionController);