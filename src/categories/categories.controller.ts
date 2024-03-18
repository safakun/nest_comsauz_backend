import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Category } from './categories.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService) {}
    
    @ApiOperation({ summary: 'Creation of category' })
    @ApiResponse({ status: 201, type: Category })
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Post()
    createCategory(@Body() dto: CreateCategoryDto,
    ) {
        return this.categoriesService.create(dto)
    }
}
