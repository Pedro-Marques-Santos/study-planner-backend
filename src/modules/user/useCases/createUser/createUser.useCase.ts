import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/implementation/iuser.repository";
import { ICreateUserDTO } from "../../dtos/user.dto";
import { UserEntity } from "../../entities/user.entity";
import { AppError } from "../../../../shared/infra/errors/AppError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,
  ) {}

  async execute({
    email,
    idGoogle,
    imgProfile,
    name,
  }: ICreateUserDTO): Promise<UserEntity> {
    const verifyUser = await this.userRepository.findByIdGoogle(idGoogle);

    if (verifyUser) {
      throw new AppError("User already registered", 409);
    }

    const user = await this.userRepository.createUser({
      name,
      email,
      idGoogle,
      imgProfile,
    });

    if (!user) {
      throw new AppError("Error registering user", 500);
    }

    return user;
  }
}

export { CreateUserUseCase };
