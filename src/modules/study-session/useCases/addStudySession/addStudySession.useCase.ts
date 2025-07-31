import { inject, injectable } from "tsyringe";
import { ITaskRepository } from "../../../task/repositories/implementation/itask.repository";
import { IStudySessionRepository } from "../../repositories/implementation/istudySession.repository";
import { TaskEntity } from "../../../task/entities/task.entity";
import { AppError } from "../../../../shared/infra/errors/AppError";
import { ICreateStudySessionDTO } from "../../dtos/studySession.dto";

@injectable()
export class AddStudySessionUseCase {
  constructor(
    @inject("StudySessionRepository")
    private studySessionRepository: IStudySessionRepository,

    @inject("TaskRepository")
    private taskRepository: ITaskRepository,
  ) {}

  async execute(data: ICreateStudySessionDTO): Promise<TaskEntity> {
    await this.studySessionRepository.addStudySessions(data);

    const updatedTask = await this.taskRepository.findByTaskId(data.taskId);

    if (!updatedTask) {
      throw new AppError("Error in search for task uptade to session.", 400);
    }

    return updatedTask;
  }
}
