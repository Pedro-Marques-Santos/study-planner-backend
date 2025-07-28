import { injectable, inject } from "tsyringe";
import { IUserRepository } from "../user/repositories/implementation/iuser.repository";
import { UserEntity } from "../user/entities/user.entity";

@injectable()
class AuthUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,
  ) {}

  async execute(idGoogle: string): Promise<UserEntity | null> {
    const user = await this.userRepository.findByIdGoogle(idGoogle);

    return user;
  }
}

export { AuthUseCase };
