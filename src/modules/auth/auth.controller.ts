import { Request, Response } from "express";

import { container } from "tsyringe";
import { AuthUseCase } from "./auth.useCase";

class AuthController {
  async handle(request: Request, response: Response): Promise<Response> {
    const idGoogle = request.user.id;

    const authUseCase = container.resolve(AuthUseCase);

    const user = await authUseCase.execute(idGoogle);

    if (!user) {
      return response.json({ status: "noRegister" });
    }

    return response.json(user);
  }
}

export { AuthController };
