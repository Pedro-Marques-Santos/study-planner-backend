import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddStudySessionUseCase } from "./addStudySession.useCase";

class AddStudySessionController {
  async handle(request: Request, response: Response): Promise<Response> {
    // const { taskId, studySessions } = request.body;

    const { taskId } = request.params;
    const { studySessions } = request.body;

    const addStudySessionUseCase = container.resolve(AddStudySessionUseCase);

    const task = await addStudySessionUseCase.execute({
      taskId,
      studySessions,
    });

    return response.json(task);
  }
}

export { AddStudySessionController };
