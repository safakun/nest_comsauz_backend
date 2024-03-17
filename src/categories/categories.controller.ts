import { Body, Controller, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService) {}
    
    @Post()
    createCategory(@Body() dto: CreateCategoryDto,
    ) {
        return this.categoriesService.create(dto)
    }
}
