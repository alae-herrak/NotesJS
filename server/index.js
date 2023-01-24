// imports
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import userRouter from "./routes/user.js";

// app setup
const app = express();
const PORT = 5000;

// middlewares
app.use(cors());
app.use(bodyParser.json());

// routes
app.use("/users", userRouter);

// DB connexion and app starting
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log(error));
