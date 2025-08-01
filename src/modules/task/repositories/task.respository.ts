import { ITaskRepository } from "./implementation/itask.repository";
import { prisma } from "../../../shared/infra/database/prisma.service";
import { TaskEntity } from "../entities/task.entity";
import { ICreateTaskDTO, IGetDateFilterByPeriodDTO } from "../dtos/task.dto";
import { getDateFilterByPeriod } from "../utils/getDateFilterByPeriod";
import { PeriodTypeTask } from "../utils/interfaces";

class TaskRepository implements ITaskRepository {
  async createTask(data: ICreateTaskDTO): Promise<TaskEntity> {
    const task = await prisma.task.create({
      data: {
        name: data.name,
        about: data.about,
        link: data.link,
        status: data.status,
        startAt: data.startAt,
        userId: data.userId,
        taskCategories: {
          create: data.categoryIds.map((categoryId) => ({
            category: { connect: { id: categoryId } },
          })),
        },
        studySessions: {
          create: data.studySessions ?? [],
        },
      },
      include: {
        taskCategories: {
          include: {
            category: true,
          },
        },
        studySessions: true,
      },
    });

    return new TaskEntity(
      task.id,
      task.name,
      task.status,
      task.startAt,
      task.userId,
      task.createdAt,
      task.updatedAt,
      task.about ?? undefined,
      task.link ?? undefined,
      task.taskCategories.map((tc) => ({
        categoryId: tc.categoryId,
        category: {
          id: tc.category.id,
          name: tc.category.name,
        },
      })),
      task.studySessions.map((ss) => ({
        id: ss.id,
        date: ss.date,
        duration: ss.duration,
      })),
    );
  }

  async findAllByUserId(userId: string): Promise<TaskEntity[]> {
    const tasks = await prisma.task.findMany({
      where: { userId },
      include: {
        taskCategories: {
          include: {
            category: true,
          },
        },
        studySessions: true,
      },
    });

    return tasks.map(
      (task) =>
        new TaskEntity(
          task.id,
          task.name,
          task.status,
          task.startAt,
          task.userId,
          task.createdAt,
          task.updatedAt,
          task.about ?? undefined,
          task.link ?? undefined,
          task.taskCategories.map((tc) => ({
            categoryId: tc.categoryId,
            category: {
              id: tc.category.id,
              name: tc.category.name,
            },
          })),
          task.studySessions.map((ss) => ({
            id: ss.id,
            date: ss.date,
            duration: ss.duration,
          })),
        ),
    );
  }

  async findByTaskId(taskId: string): Promise<TaskEntity | null> {
    const task = await prisma.task.findUnique({
      where: { id: taskId },
      include: {
        taskCategories: {
          include: {
            category: true,
          },
        },
        studySessions: true,
      },
    });

    if (!task) return null;

    return new TaskEntity(
      task.id,
      task.name,
      task.status,
      task.startAt,
      task.userId,
      task.createdAt,
      task.updatedAt,
      task.about ?? undefined,
      task.link ?? undefined,
      task.taskCategories.map((tc) => ({
        categoryId: tc.categoryId,
        category: {
          id: tc.category.id,
          name: tc.category.name,
        },
      })),
      task.studySessions.map((ss) => ({
        id: ss.id,
        date: ss.date,
        duration: ss.duration,
      })),
    );
  }

  async findByPeriod({
    userId,
    period,
  }: IGetDateFilterByPeriodDTO): Promise<TaskEntity[]> {
    const dateFilter = getDateFilterByPeriod(period);

    // Se for 'all', retorna todas
    if (!dateFilter) {
      return await this.findAllByUserId(userId);
    }

    const tasks = await prisma.task.findMany({
      where: {
        userId,
        startAt: dateFilter,
      },
      include: {
        taskCategories: {
          include: {
            category: true,
          },
        },
        studySessions: true,
      },
    });

    return tasks.map(
      (task) =>
        new TaskEntity(
          task.id,
          task.name,
          task.status,
          task.startAt,
          task.userId,
          task.createdAt,
          task.updatedAt,
          task.about ?? undefined,
          task.link ?? undefined,
          task.taskCategories.map((tc) => ({
            categoryId: tc.categoryId,
            category: {
              id: tc.category.id,
              name: tc.category.name,
            },
          })),
          task.studySessions.map((ss) => ({
            id: ss.id,
            date: ss.date,
            duration: ss.duration,
          })),
        ),
    );
  }
}

export { TaskRepository };
