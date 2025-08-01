import { ICreateTaskDTO, IGetDateFilterByPeriodDTO } from "../../dtos/task.dto";
import { TaskEntity } from "../../entities/task.entity";
import { PeriodTypeTask } from "../../utils/interfaces";

export interface ITaskRepository {
  createTask(data: ICreateTaskDTO): Promise<TaskEntity>;
  findByTaskId(taskId: string): Promise<TaskEntity | null>;
  findAllByUserId(userId: string): Promise<TaskEntity[]>;
  findByPeriod({
    userId,
    period,
  }: IGetDateFilterByPeriodDTO): Promise<TaskEntity[]>;
}
