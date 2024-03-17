import { Inject, Injectable } from '@nestjs/common';
import { Category } from './categories.model';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {

    constructor(@Inject('CATEGORIES_REPOSITORY') private categoryRepository: typeof Category ) {}

    async create(dto: CreateCategoryDto) {
        const category = await this.categoryRepository.create({...dto});
        return category;
    }
}
