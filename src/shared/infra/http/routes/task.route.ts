import { Router } from "express";
import { authGoogle } from "../middlewares/authGoogle";
import { CreateTaskController } from "../../../../modules/task/useCases/createTask/createTask.controller";
import { AddStudySessionController } from "../../../../modules/study-session/useCases/addStudySession/addStudySession.controller";
import { GetTaskByPeriodController } from "../../../../modules/task/useCases/getTasksByPeriod/getTasksByPeriod.controller";

const taskRoute = Router();

const createTaskController = new CreateTaskController();
const addStudySessionController = new AddStudySessionController();
const getTasksByPeriodController = new GetTaskByPeriodController();

taskRoute.post("/", authGoogle, (request, response) => {
  return createTaskController.handle(request, response);
});

taskRoute.post("/:taskId/study-sessions", authGoogle, (request, response) => {
  return addStudySessionController.handle(request, response);
});

taskRoute.get("/period", authGoogle, (request, response) => {
  return getTasksByPeriodController.handle(request, response);
});

export { taskRoute };
