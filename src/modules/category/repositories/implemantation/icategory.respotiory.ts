import { ICreateCategoryDTO } from "../../dtos/category.dto";
import { CategoryEntity } from "../../entities/category.entity";

export interface ICategoryRepository {
  create({ name, userId }: ICreateCategoryDTO): Promise<CategoryEntity>;
  findByNameAndUser({
    name,
    userId,
  }: ICreateCategoryDTO): Promise<CategoryEntity | null>;
  findByIdsAndUser(params: {
    ids: string[];
    userId: string;
  }): Promise<CategoryEntity[]>;
}
