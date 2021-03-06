import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./Routes/User.js";
import {findloai} from "./controllers/SanphamController.js";
import bodyParse from "body-parser";
const app = express();

//DotEnv
dotenv.config();
const port = process.env.PORT || 4343;
const url = process.env.DB_URL;
const secret = process.env.SECRET;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: false}));

app.listen(port);

//Connect to MonggoDB
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log("Database connected");
        
    })
    .catch((error) => {
        console.log("Error connecting to database: " + error.message);
    });

app.use("/api/", [userRoutes]);
var loai = findloai()
        .then((data) => {
            console.log(data);
        });
 