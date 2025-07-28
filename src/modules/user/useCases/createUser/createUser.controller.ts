import { Response, Request } from "express";

import { container } from "tsyringe";
import { CreateUserUseCase } from "./createUser.useCase";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email } = request.body;

    const idGoogle = request.user.id;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const user = await createUserUseCase.execute({ name, email, idGoogle });

    return response.json(user);
  }
}

export { CreateUserController };
