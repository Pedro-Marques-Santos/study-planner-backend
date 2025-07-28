import { Router } from "express";
import { CreateUserController } from "../../../../modules/user/useCases/createUser/createUser.controller";
import { authGoogle } from "../middlewares/authGoogle";

const createUserRoute = Router();

const createUserController = new CreateUserController();

createUserRoute.post("/", authGoogle, (request, response) => {
  return createUserController.handle(request, response);
});

export { createUserRoute };
