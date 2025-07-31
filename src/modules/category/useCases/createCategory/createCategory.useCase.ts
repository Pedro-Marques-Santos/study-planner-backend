import { inject, injectable } from "tsyringe";
import { ICategoryRepository } from "../../repositories/implemantation/icategory.respotiory";
import { ICreateCategoryDTO } from "../../dtos/category.dto";
import { CategoryEntity } from "../../entities/category.entity";
import { AppError } from "../../../../shared/infra/errors/AppError";

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository,
  ) {}

  async execute({ name, userId }: ICreateCategoryDTO): Promise<CategoryEntity> {
    const existingCategory = await this.categoryRepository.findByNameAndUser({
      name,
      userId,
    });

    if (existingCategory) {
      throw new AppError("Category with this name already exists", 409);
    }

    const category = await this.categoryRepository.create({
      name,
      userId,
    });

    return category;
  }
}
