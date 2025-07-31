import { Router } from "express";
import { authGoogle } from "../middlewares/authGoogle";
import { CreateTaskController } from "../../../../modules/task/useCases/createTask/createTask.controller";

const taskRoute = Router();

const createTaskController = new CreateTaskController();

taskRoute.post("/", authGoogle, (request, response) => {
  return createTaskController.handle(request, response);
});

export { taskRoute };
