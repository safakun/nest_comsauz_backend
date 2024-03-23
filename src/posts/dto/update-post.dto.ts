import { ApiProperty } from "@nestjs/swagger";

export class UpdatePostDto {
    @ApiProperty({ example: 3, description: 'Id of the post that should be updated' })
    readonly postId: number;
    @ApiProperty({ example: 'My post title to update', description: 'Title of the post to update' })
    readonly title: string;
    @ApiProperty({ example: 'My post content to update', description: 'Content of the post to update' })
    readonly content: string;
    @ApiProperty({ example: 'keywprds, update, post', description: 'Keywords of the post to update' })
    readonly keywords: string;
    @ApiProperty({ example: 3, description: 'Categpry id of the post to update' })
    readonly categoryId: number;
}