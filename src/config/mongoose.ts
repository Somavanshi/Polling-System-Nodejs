import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/polling_system_development");

export const db = mongoose.connection;

db.on("error",(error) => {
    console.log(error);
});

db.once("open",() => {
    console.log("MongoDb connected successfully");
});