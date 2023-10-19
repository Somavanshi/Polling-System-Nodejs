import express from 'express';
import { OptionModel } from '../models/option.model';

export async function getOptionsById(req: express.Request, res: express.Response) {
    try {
        const { id } = req.params;
        const option = await OptionModel.findById(id);
        return res.json(option);
    } catch (error) {
        
    }
}