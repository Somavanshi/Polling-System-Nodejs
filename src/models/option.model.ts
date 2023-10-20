import mongoose from "mongoose";
/**
 * Created options schema
 */
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

/**
 * Model for Options Schema
 */
export const OptionModel = mongoose.model("Option", OptionsSchema);