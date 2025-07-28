import { ICreateUserDTO } from "../../dtos/user.dto";
import { UserEntity } from "../../entities/user.entity";

export interface IUserRepository {
  findByIdGoogle(idGoogle: string): Promise<UserEntity | null>;
  createUser({
    name,
    email,
    idGoogle,
    imgProfile,
  }: ICreateUserDTO): Promise<UserEntity>;
}
