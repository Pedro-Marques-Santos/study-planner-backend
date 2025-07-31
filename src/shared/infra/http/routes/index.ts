import { Router } from "express";
import { authRoute } from "./auth.route";
import { userRoute } from "./user.route";
import { taskRoute } from "./task.route";
import { categoryRoute } from "./category.route";

const routes = Router();

routes.use("/users", userRoute);
routes.use("/auth", authRoute);
routes.use("/tasks", taskRoute);
routes.use("/categories", categoryRoute);

export { routes };
