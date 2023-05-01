import express from "express";

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