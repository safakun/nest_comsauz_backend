import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
    @IsString({message: 'Shoud be a string'})
    readonly value: string;
    @IsNumber({}, {message: 'Shoud be a number'})
    readonly userId: number;
}