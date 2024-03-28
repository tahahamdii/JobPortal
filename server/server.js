import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import dbConnection from "./dbConfig/dbConnection.js";
import { mongo } from "mongoose";


dotenv.config();

const app = express();
const port = process.env.PORT || 8800;

// MongoDB Connection

dbConnection();

// Middleware

app.use(cors());
app.use(xss());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({extended: true}));


app.use(morgan("dev"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
