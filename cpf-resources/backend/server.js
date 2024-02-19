import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import { PORT, mongoURL } from "./config.js";
import router from "./src/routes/index.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(router)

mongoose.connect(mongoURL).then(() => {
  console.log("Connected!");
  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
})
.catch(error => {
    console.log({message: error.message});
})
