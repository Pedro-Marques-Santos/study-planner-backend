import { Router } from "express";
import { createUserRoute } from "./createUser.route";
import { authRoute } from "./auth.route";

const routes = Router();

routes.use("/create-user", createUserRoute);
routes.use("/auth/me", authRoute);

export { routes };
