import express from 'express';
import "./config/mongoose";
import { QuestionRouter } from './routes/questions';
import { OptionsRouter } from './routes/options';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/question", QuestionRouter);
app.use("/options", OptionsRouter);

app.listen(8081, () => {
    console.log('listening on http://localhost:8081');
});
