import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
    @ApiProperty({ example: 'USER', description: 'Role to add for user' })
    @IsString({message: 'Shoud be a string'})
    readonly value: string;
    @ApiProperty({ example: '3', description: 'User id' })
    @IsNumber({}, {message: 'Shoud be a number'})
    readonly userId: number;
}