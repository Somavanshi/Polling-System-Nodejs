import mongoose from "mongoose";

/**
 * Mongo connection URL
 */
mongoose.connect("mongodb://localhost/polling_system_development");

export const db = mongoose.connection;

db.on("error",(error) => {
    console.log(error);
});

db.once("open",() => {
    console.log("MongoDb connected successfully");
});