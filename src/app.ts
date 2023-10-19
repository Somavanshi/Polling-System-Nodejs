import express from 'express';
import "./config/mongoose";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/");

app.listen(8081, () => {
    console.log('listening on http://localhost:8081');
});
