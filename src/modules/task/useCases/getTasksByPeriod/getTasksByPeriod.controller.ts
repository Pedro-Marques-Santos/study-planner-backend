import { Request, Response } from "express";
import { container } from "tsyringe";

import { PeriodTypeTask } from "../../utils/interfaces";
import { GetTasksByPeriodUseCase } from "./getTasksByPeriod.useCase";

class GetTaskByPeriodController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.body;
    const { period } = request.query;

    const periodValue =
      typeof period === "string" && period.includes(period as PeriodTypeTask)
        ? (period as PeriodTypeTask)
        : "all";

    const getTasksByPeriodUseCase = container.resolve(GetTasksByPeriodUseCase);

    const tasks = await getTasksByPeriodUseCase.execute({
      userId,
      period: periodValue,
    });

    return response.json(tasks);
  }
}

export { GetTaskByPeriodController };
