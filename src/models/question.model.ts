import mongoose from "mongoose";
/**
 * Created question schema
 */
const QuestionSchema = new mongoose.Schema({
    text: {
        type: "String",
        required: true
    },
    options: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Option"
    }]
}, {timestamps: true});

/**
 * Created Model for question
 */
export const QuestionModel = mongoose.model("Question", QuestionSchema);