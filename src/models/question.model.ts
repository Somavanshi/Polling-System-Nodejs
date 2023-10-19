import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
    text: {
        type: "String",
        required: true
    },
    Options: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Option"
    }]
}, {timestamps: true});

export const QuestionModel = mongoose.model("Question", QuestionSchema);