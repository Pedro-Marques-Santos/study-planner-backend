import { container } from "tsyringe";

import { UserRepository } from "../../../modules/user/repositories/user.repository";
import { IUserRepository } from "../../../modules/user/repositories/implementation/iuser.repository";
import { TaskRepository } from "../../../modules/task/repositories/task.respository";
import { ITaskRepository } from "../../../modules/task/repositories/implementation/itask.repository";
import { ICategoryRepository } from "../../../modules/category/repositories/implemantation/icategory.respotiory";
import { CategoryRepository } from "../../../modules/category/repositories/category.respository";
import { IStudySessionRepository } from "../../../modules/study-session/repositories/implementation/istudySession.repository";
import { StudySessionRepository } from "../../../modules/study-session/repositories/studySession.repository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<ITaskRepository>("TaskRepository", TaskRepository);

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository,
);

container.registerSingleton<IStudySessionRepository>(
  "StudySessionRepository",
  StudySessionRepository,
);
