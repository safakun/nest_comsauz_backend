import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { CategoriesModule } from 'src/categories/categories.module';
import { PostsModule } from 'src/posts/posts.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UsersModule),
    forwardRef(() => CategoriesModule),
    forwardRef(() => PostsModule),
    JwtModule.register({
      secret: process.env.SECRET_KEY || "SECRET",
      signOptions: {
        expiresIn: "24h"
      }
    })
  ],
  exports: [
    AuthService,
    JwtModule
  ]
})
export class AuthModule {}
