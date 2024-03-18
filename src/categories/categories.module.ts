import { Module, forwardRef} from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { Category } from './categories.model';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { categoriesProviders } from './categories.providers';
import { Post } from 'src/posts/posts.model';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService,
  ...categoriesProviders],
  imports: [Category, Post, 
    forwardRef(() => AuthModule)
  ]
})
export class CategoriesModule {}
