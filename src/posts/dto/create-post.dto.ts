import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty({ example: 'My post title', description: 'Title of the post' })
    readonly title: string;
    @ApiProperty({ example: 'Content of the post', description: 'Post content' })
    readonly content: string;
    @ApiProperty({ example: 'new, keywords, blog, webdev', description: 'Keywords of the post' })
    readonly keywords: string;
    @ApiProperty({ example: 3, description: 'Id of the user who is the post author' })
    readonly userId: number;
    @ApiProperty({ example: 3, description: 'id of category of the post' })
    readonly categoryId: number;
}