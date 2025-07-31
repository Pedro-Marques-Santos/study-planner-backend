import { Router } from "express";
import { CreateCategoryController } from "../../../../modules/category/useCases/createCategory/createCategory.controller";

const categoryRoute = Router();

const createCategoryController = new CreateCategoryController();

categoryRoute.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

export { categoryRoute };
