import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Category } from './categories.model';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {

    constructor(@Inject('CATEGORIES_REPOSITORY') private categoryRepository: typeof Category ) {}

    async create(dto: CreateCategoryDto) {
        const category = await this.categoryRepository.create({...dto});
        return category;
    }

    async update(dto: UpdateCategoryDto) {
        const category = await this.categoryRepository.findByPk(dto.categoryId);
        if (!category) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
        category.title = dto.title;
        await category.save();
        return category;
    }
}
