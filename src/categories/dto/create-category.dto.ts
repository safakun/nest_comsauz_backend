import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
    @ApiProperty({ example: 'Brands', description: 'Title of the category' })
    readonly title: string;
}