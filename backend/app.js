import express from 'express'
const app = express()
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectDataBase } from './config/dbConnect.js';
import errorMiddleware from './middlewares/errors.js';


//handle uncaught exceptions

process.on("uncaughtException", (err) => {
    console.log(`ERROR: ${err}`);
    console.log("Shutting down server due to uncaught exception");
     process.exit(1);
});


dotenv.config({ path:"backend/config/config.env"});

connectDataBase();

app.use(express.json());
app.use(cookieParser());

import productRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.js";


app.use("/api/v1",productRoutes);
app.use("/api/v1",authRoutes);

//using error middleware
app.use(errorMiddleware);

const server = app.listen (process.env.PORT ,() => {
    console.log(`Server started on port : ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});

//handle unhandled promise rejections

process.on("unhandledRejection", (err) => {
    console.log(`ERROR: ${err}`);
    console.log("Shutting down server due to unhandled promise rejection");
    server.close(() =>  {
        process.exit(1);
    });

});
