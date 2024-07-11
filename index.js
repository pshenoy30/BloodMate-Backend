import mongoose from "mongoose";
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import importUserData from "./seed/userSeed.js"
import importSiteData from "./seed/siteSeed.js";
import importInventoryData from "./seed/inventorySeed.js";
import userRoute from "./routes/user.js";

const app = express();
const PORT = process.env.PORT || 8080;

const connectMongo = async () => {
    try {
        await mongoose.connect (process.env.ATLAS_URI);
        if(process.argv.includes("--seed")){
            await importUserData();
            await importInventoryData();
            await importSiteData();
        }
    } catch (error) {
        res.status(500).send("server error");
    }
}

// Middleware to parse JSON request bodies
app.use(express.json());

// All routes
app.use(cors()); 

app.use("/user", userRoute);

app.get("/", (req, res) => {
    res.status(200).send("Testing Request Successful");
});

app.listen(PORT, () => {
    connectMongo();
    console.log(`Started the server on ${PORT}`);
    console.log("To kill the server use CTRL+C");
});
