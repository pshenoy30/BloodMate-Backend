import mongoose from "mongoose";
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import importUserData from "./seed/user.js"
import importSiteData from "./seed/site.js";
import importInventoryData from "./seed/inventory.js";

const app = express();
const PORT = process.env.PORT || 8080;
const db = process.env.ATLAS_URI;
const dbOptions = {useNewUrlParser: true, useUnifiedTopology: true};

const connectMongo = async () => {
    try {
        await mongoose.connect (process.env.ATLAS_URI);
        if(process.argv.includes("--seed")){
            await importUserData();
            await importInventoryData();
            await importSiteData();
            mongoose.disconnect();
        }
    } catch (error) {
        
    }
}

// Middleware to parse JSON request bodies
app.use(express.json());

// All routes
app.use(cors()); 

app.get("/", (req, res) => {
    res.status(200).send("Testing Request Successful");
});

app.listen(PORT, () => {
    connectMongo();
    console.log(`Started the server on ${PORT}`);
    console.log("To kill the server use CTRL+C");
});
