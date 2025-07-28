import "reflect-metadata";

import express from "express";
import { routes } from "./routes";
import { errorHandler } from "../errors/errorHandler";

import "../containers/index";
import "../services/firebase.service";

const app = express();

app.use(express.json());

app.use(routes);
app.use(errorHandler);

app.listen(9999, () => {
  console.log(`${process.env.PROJECT_NAME}; PORT: 9999`);
});
