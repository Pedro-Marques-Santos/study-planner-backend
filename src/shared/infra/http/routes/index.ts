import { Router } from "express";
import { createUserRoute } from "./createUser.route";

const routes = Router();

routes.use("/create-user", createUserRoute);

export { routes };
