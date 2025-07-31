import { Request, Response } from "express";

import { container } from "tsyringe";
import { CreateTaskUseCase } from "./createTask.useCase";

export class CreateTaskController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      about,
      link,
      status,
      startAt,
      categoryIds,
      studySessions,
      userId,
    } = request.body;

    const createTaskUseCase = container.resolve(CreateTaskUseCase);

    const task = await createTaskUseCase.execute({
      name,
      about,
      link,
      status,
      startAt: new Date(startAt),
      userId,
      categoryIds,
      studySessions,
    });

    return response.json(task);
  }
}
