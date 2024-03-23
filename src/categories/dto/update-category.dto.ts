import { ApiProperty } from "@nestjs/swagger";

export class UpdateCategoryDto {
    @ApiProperty({ example: 3, description: 'Id of the category to update' })
    readonly categoryId: number;
    @ApiProperty({ example: 'Laptops', description: 'Title of the category to update' })
    readonly title: string;
}