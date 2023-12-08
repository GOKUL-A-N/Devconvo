import express from 'express';
import mongoose from 'mongoose';
import { PORT,MongoDBURL } from './config.js';
import blogRoutes from './routes/blogRoutes.js';
// const blogRouters = require("./routes/blogRoutes.js");
import cors from "cors";
import loginRouter from "./routes/loginRoutes.js";
import morgan from "morgan";

const app = express();

app.use(express.json());

app.use(cors({origin: true, credentials: true}));

app.use(morgan("dev"));

app.get('/', (req, res) => { 
    res.send("Welcome Back Chief!");
});

app.use('/blogs' , blogRoutes);

app.use('/users', loginRouter); 

mongoose
    .connect(MongoDBURL)
    .then(() => {
        console.log("Connected");
        app.listen(PORT,() => {
            console.log(`App listening on port ${PORT}`);
        });
    })
    .catch(err => {
        console.log(`Failed to connect to port ${err.message}`);
    })