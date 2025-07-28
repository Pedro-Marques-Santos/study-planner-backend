import { IUserRepository } from "./implementation/iuser.repository";

import { prisma } from "../../../shared/infra/database/prisma.service";
import { UserEntity } from "../entities/user.entity";
import { ICreateUserDTO } from "../dtos/user.dto";

class UserRepository implements IUserRepository {
  async findByIdGoogle(idGoogle: string): Promise<UserEntity | null> {
    const user = await prisma.user.findUnique({
      where: { idGoogle },
    });

    if (!user) return null;

    return new UserEntity(
      user.id,
      user.idGoogle,
      user.name,
      user.email,
      user.imgProfile || undefined,
      user.createdAt,
      user.updatedAt,
    );
  }

  async createUser({
    name,
    email,
    idGoogle,
    imgProfile,
  }: ICreateUserDTO): Promise<UserEntity> {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        idGoogle,
        imgProfile,
      },
    });

    return new UserEntity(
      user.id,
      user.idGoogle,
      user.name,
      user.email,
      user.imgProfile || undefined,
      user.createdAt,
      user.updatedAt,
    );
  }
}

export { UserRepository };
