import mongoose from "mongoose";
import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8080;
const db = process.env.ATLAS_URI;
const dbOptions = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(db,dbOptions).then(()=>console.log("DB connected!")).catch(err => console.log(err));

// Middleware to parse JSON request bodies
app.use(express.json());

// All routes
app.use(cors()); 

app.get("/", (req, res) => {
    res.status(200).send("Testing Request Successful");
});

app.listen(PORT, () => {
    console.log(`Started the server on ${PORT}`);
    console.log("To kill the server use CTRL+C");
});
