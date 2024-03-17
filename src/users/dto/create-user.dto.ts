import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length, IsEmail } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'johndoe@example.com', description: 'User email' })
    @IsString({message: 'Must be a string'})
    @IsEmail({}, {message: 'Email is not correct'})
    readonly email: string;
    @ApiProperty({ example: '123124124134', description: 'User password' })
    @IsString({message: 'Must be a string'})
    @Length(6, 16, {message: 'No less than 6 and no more than 16'})
    readonly password: string;
}