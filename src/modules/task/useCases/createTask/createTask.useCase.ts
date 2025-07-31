import { inject, injectable } from "tsyringe";
import { ITaskRepository } from "../../repositories/implementation/itask.repository";
import { ICreateTaskDTO } from "../../dtos/task.dto";
import { TaskEntity } from "../../entities/task.entity";
import { ICategoryRepository } from "../../../category/repositories/implemantation/icategory.respotiory";
import { AppError } from "../../../../shared/infra/errors/AppError";

@injectable()
export class CreateTaskUseCase {
  constructor(
    @inject("TaskRepository")
    private taskRepository: ITaskRepository,

    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository,
  ) {}

  async execute(data: ICreateTaskDTO): Promise<TaskEntity> {
    const validCategories = await this.categoryRepository.findByIdsAndUser({
      ids: data.categoryIds,
      userId: data.userId,
    });

    if (validCategories.length === 0) {
      throw new AppError(
        "No valid categories found. Please check the IDs.",
        400,
      );
    }

    return await this.taskRepository.createTask({
      ...data,
      categoryIds: validCategories.map((cat) => cat.id),
    });
  }
}
