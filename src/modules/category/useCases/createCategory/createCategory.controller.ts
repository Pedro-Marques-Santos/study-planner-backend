import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryUseCase } from "./createCategory.useCase";

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, userId } = request.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    const category = await createCategoryUseCase.execute({ name, userId });

    return response.json(category);
  }
}

export { CreateCategoryController };
