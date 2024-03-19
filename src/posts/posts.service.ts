import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './posts.model';
import { FilesService } from 'src/files/files.service';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {

    constructor(@Inject('POSTS_REPOSITORY') private postRepository: typeof Post,
    private fileService: FilesService ) {}

    async create(dto: CreatePostDto, image: any) {
        const fileName = await this.fileService.createFile(image);
        const post = await this.postRepository.create({...dto, image: fileName});
        return post;
    }

    async getAllPosts(limit: number) {
        
        const posts = await this.postRepository.findAll({
            limit: limit,
            include: {all: true}
        });
        return posts;
    }

    async getPostById(id: number) {
        const post = await this.postRepository.findOne({
            where: {id: id}, 
            include: {all: true}
        });
        if (!post) {
            throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
        }
        return post;
    }

    async update(dto: UpdatePostDto, image: any) {
        const post = await this.postRepository.findOne({
            where: {id: Number(dto.postId)}
        });
        if (!post) {
            throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
        }

        if(!image) {

        } 
        post.title = dto.title;
        post.content = dto.content;
        post.categoryId = dto.categoryId;
        post.keywords = dto.keywords;

        await this.fileService.deleteFile(post.image);
        const fileName = await this.fileService.createFile(image);
        post.image = fileName;

        await post.save();
        return post;

    }

}
