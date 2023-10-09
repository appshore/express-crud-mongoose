import express from "express";
import mongoose from "mongoose";
import config from "../config/config";

import bookRoutes from "./routes/book";
import helloRoutes from "./routes/hello";
import loadRoutes from "./routes/load";

const port = process.env.port || 3000;

const app = express();

app.use("/book", bookRoutes);
app.use("/load", loadRoutes);
app.use("/", helloRoutes);

mongoose.connect(config.mongoose.url).then(() => {
  console.log(`MongoDB connected`);

  app.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
});
