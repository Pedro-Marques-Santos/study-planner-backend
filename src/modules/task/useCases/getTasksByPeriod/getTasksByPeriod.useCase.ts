import { inject, injectable } from "tsyringe";
import { ITaskRepository } from "../../repositories/implementation/itask.repository";
import { TaskEntity } from "../../entities/task.entity";
import { IGetDateFilterByPeriodDTO } from "../../dtos/task.dto";

@injectable()
class GetTasksByPeriodUseCase {
  constructor(
    @inject("TaskRepository")
    private taskRepository: ITaskRepository,
  ) {}

  async execute({
    userId,
    period,
  }: IGetDateFilterByPeriodDTO): Promise<TaskEntity[]> {
    const tasks = await this.taskRepository.findByPeriod({ userId, period });

    return tasks;
  }
}

export { GetTasksByPeriodUseCase };
