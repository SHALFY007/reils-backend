import express from "express";
import mongoose from "mongoose";

mongoose
    .connect("mongodb+srv://vladislavevlashin:eCmiKCD2mUBkwrPv@cluster0.oe6ksvn.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log('DB OK'))
    .catch((e) => console.log(e))

const app = express();

app.use(express.json());

//CRUD

//AUTH

app.listen(4444, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server starts');
    }
});