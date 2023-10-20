import express from 'express';
import { OptionModel } from '../models/option.model';
import { QuestionModel } from '../models/question.model';

export async function optionDeleteController(req: express.Request, res: express.Response) {
    try {
        const { id } = req.params
        const option = await OptionModel.findById(id);

        if (option) {
            const question = await QuestionModel.findById(option?.Question);
            await OptionModel.deleteOne({
                _id: option.id
            });
            await QuestionModel.updateOne(
                { _id: question?.id },
                { $pull: { options: id } }
            );
        }

        return res.json({
            message: "option deleted successfully",
        });
    } catch (error: any) {
        return res.json({
            success: false,
            message: error.message
        });
    }
}

export async function optionVoteController(req: express.Request, res: express.Response) {
    try {
        const { id } = req.params
        const option = await OptionModel.findById(id);

        if (option) {
            await OptionModel.updateOne(
                { _id: option._id },
                { $inc: { votes: 1 } }
            );
        }

        return res.json({
            message: "vote added successfully",
        });
    } catch (error: any) {
        return res.json({
            success: false,
            message: error.message
        });
    }
}