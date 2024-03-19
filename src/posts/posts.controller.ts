import { Body, Controller, Get, Param, Patch, Post, Query, Req, UploadedFile, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiResponse} from '@nestjs/swagger';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

import { Request } from 'express';
import { UpdatePostDto } from './dto/update-post.dto';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) {}
    
    @ApiOperation({ summary: 'Creation of post' })
    @ApiResponse({ status: 200, type: Post })
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @UsePipes(ValidationPipe)
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: CreatePostDto,
    @UploadedFile() image
    ) {
        return this.postService.create(dto, image)
    }

    @ApiOperation({ summary: 'Get all posts with limit' })
    @ApiResponse({ status: 200, type: [Post] })
    @Get()
    getPosts(@Req() request: Request): Object {
        let limit = 10;
        if (request.query.limit) {
            limit = Number(request.query.limit);
        }
  
            return this.postService.getAllPosts(limit);
        
    
       

       
    }

    @ApiOperation({ summary: 'Get one post' })
    @ApiResponse({ status: 200, type: Post })
    @Get('/:id')
    getOnePost(@Param('id') id: number) {
        return this.postService.getPostById(id);
    }


    @ApiOperation({ summary: 'Update a post' })
    @ApiResponse({ status: 200, type: Post })
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @UsePipes(ValidationPipe)
    @Patch()
    @UseInterceptors(FileInterceptor('image'))
    updatePost(@Body() dto: UpdatePostDto, @UploadedFile() image) {
        return this.postService.update(dto, image);
    }



}
