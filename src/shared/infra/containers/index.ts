import { container } from "tsyringe";

import { UserRepository } from "../../../modules/user/repositories/user.repository";
import { IUserRepository } from "../../../modules/user/repositories/implementation/iuser.repository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
