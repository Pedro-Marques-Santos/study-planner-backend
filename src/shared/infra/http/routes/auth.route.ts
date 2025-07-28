import { Router } from "express";
import { authGoogle } from "../middlewares/authGoogle";
import { AuthController } from "../../../../modules/auth/auth.controller";

const authRoute = Router();

const authController = new AuthController();

authRoute.get("/", authGoogle, (request, response) => {
  return authController.handle(request, response);
});

export { authRoute };
