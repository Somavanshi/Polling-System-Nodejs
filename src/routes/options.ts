import express from 'express';
import { optionDeleteController, optionVoteController } from '../controllers/options';

export const OptionsRouter = express.Router();

OptionsRouter.delete("/:id", optionDeleteController);
OptionsRouter.get("/:id/vote", optionVoteController);