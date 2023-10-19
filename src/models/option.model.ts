import mongoose from "mongoose";

const OptionsSchema = new mongoose.Schema({
    text: {
        type: "String",
        required: true
    },
    votes: {
        type: "Number",
        default: 0
    },
    Question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
    }
}, {timestamps: true});

export const OptionModel = mongoose.model("Option", OptionsSchema);