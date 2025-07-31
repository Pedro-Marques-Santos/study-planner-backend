import { ICreateTaskDTO } from "../../dtos/task.dto";
import { TaskEntity } from "../../entities/task.entity";

export interface ITaskRepository {
  createTask(data: ICreateTaskDTO): Promise<TaskEntity>;
  findByTaskId(taskId: string): Promise<TaskEntity | null>;
}
