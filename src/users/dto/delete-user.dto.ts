import { ApiProperty } from "@nestjs/swagger";

export class DeleteUserDto {
    @ApiProperty({ example: '3', description: 'User id' })
    readonly userId: number;
}