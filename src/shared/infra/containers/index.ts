import { container } from "tsyringe";

import { UserRepository } from "../../../modules/user/repositories/user.repository";
import { IUserRepository } from "../../../modules/user/repositories/implementation/iuser.repository";
import { TaskRepository } from "../../../modules/task/repositories/task.respository";
import { ITaskRepository } from "../../../modules/task/repositories/implementation/itask.repository";
import { ICategoryRepository } from "../../../modules/category/repositories/implemantation/icategory.respotiory";
import { CategoryRepository } from "../../../modules/category/repositories/category.respository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<ITaskRepository>("TaskRepository", TaskRepository);

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository,
);
