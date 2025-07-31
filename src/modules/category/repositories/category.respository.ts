import { CategoryEntity } from "../entities/category.entity";
import { ICategoryRepository } from "./implemantation/icategory.respotiory";

import { prisma } from "../../../shared/infra/database/prisma.service";
import { ICreateCategoryDTO } from "../dtos/category.dto";

export class CategoryRepository implements ICategoryRepository {
  async create({ name, userId }: ICreateCategoryDTO): Promise<CategoryEntity> {
    const created = await prisma.category.create({
      data: {
        name,
        userId,
      },
    });

    return new CategoryEntity(
      created.id,
      created.name,
      created.createdAt,
      created.updatedAt,
      created.userId ?? undefined,
    );
  }

  async findByNameAndUser({
    name,
    userId,
  }: ICreateCategoryDTO): Promise<CategoryEntity | null> {
    const found = await prisma.category.findFirst({
      where: {
        name,
        OR: [
          { userId }, // Category owned by user
          { userId: null }, // Default category
        ],
      },
    });

    if (!found) return null;

    return new CategoryEntity(
      found.id,
      found.name,
      found.createdAt,
      found.updatedAt,
      found.userId ?? undefined,
    );
  }

  async findByIdsAndUser({
    ids,
    userId,
  }: {
    ids: string[];
    userId: string;
  }): Promise<CategoryEntity[]> {
    const categories = await prisma.category.findMany({
      where: {
        id: { in: ids },
        OR: [
          { userId: null }, // standard
          { userId }, // user-defined
        ],
      },
    });

    return categories.map(
      (c) =>
        new CategoryEntity(
          c.id,
          c.name,
          c.createdAt,
          c.updatedAt,
          c.userId ?? undefined,
        ),
    );
  }
}
