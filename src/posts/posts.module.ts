import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Post } from './posts.model';
import { postsProviders } from './posts.providers';
import { User } from 'src/users/users.model';
import { FilesModule } from 'src/files/files.module';
import { Category } from 'src/categories/categories.model';

@Module({
  controllers: [PostsController],
  providers: [PostsService,
  ...postsProviders],
  imports: [Post, User, Category, FilesModule]
})
export class PostsModule {}
