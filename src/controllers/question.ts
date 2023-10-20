import express from 'express';
import { QuestionModel } from '../models/question.model';
import { OptionModel } from '../models/option.model';

/**
 * Created the question for given text
 */
export async function questionCreateController(req: express.Request, res: express.Response) {
    try {
        const body = req.body;

        const question = await QuestionModel.create({
            text: body.text,
            options: []
        });

        return res.json({
            message: "success",
            question
        });
    } catch (error: any) {
        return res.json({
            success: false,
            message: error.message
        });
    }
}

/**
 * Used to delete question with all options
 */
export async function questionDeleteController(req: express.Request, res: express.Response) {
    try {
        const { id } = req.params

        const question = await QuestionModel.findById(id);
        
        if (question) {
            await QuestionModel.deleteOne({
                _id: question?.id
            });
            await OptionModel.deleteMany({
                Question: question?.id
            });
        }

        return res.json({
            message: "question deleted successfully",
        });
    } catch (error: any) {
        return res.json({
            success: false,
            message: error.message
        });
    }
}

/**
 * return the question and all options for that id
 */
export async function getQuestionController(req: express.Request, res: express.Response) {
    try {
        const { id } = req.params

        const question = await QuestionModel.findById(id)
        .populate('options').exec();
        
        return res.json({
            message: "success",
            question
        });
    } catch (error: any) {
        return res.json({
            success: false,
            message: error.message
        });
    }
}

/**
 * It will create the options for given question id
 */
export async function createOptionForQuestionId(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const options = req.body.options;

    try {
        const question = await QuestionModel.findById(id);

        for (let option of options) {
            const newOption: any = await OptionModel.create({
                text: option.text,
                Question: question
            });

            question?.options.push(newOption._id);
        }
        await question?.save();

        return res.json({
            message: "options saved successfully"
        });
    } catch (error: any) {
        return res.json({
            success: false,
            message: error.message
        });
    }
}