import { Inject, Injectable } from '@nestjs/common';
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

    async getAllPosts() {
        const posts = await this.postRepository.findAll({
            include: {all: true}
        });
        return posts;
    }

    // async update(dto: UpdatePostDto, image: any) {

    // }

}
