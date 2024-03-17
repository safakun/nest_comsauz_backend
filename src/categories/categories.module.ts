import { Module } from '@nestjs/common';
import { Category } from './categories.model';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { categoriesProviders } from './categories.providers';
import { Post } from 'src/posts/posts.model';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService,
  ...categoriesProviders],
  imports: [Category, Post]
})
export class CategoriesModule {}
