import { ApiProperty } from "@nestjs/swagger";

export class BanUserDto {
    @ApiProperty({ example: '3', description: 'User id' })
    readonly userId: number;
    @ApiProperty({ example: 'For rule violations', description: 'Reason why user is banned' })
    readonly banReason: string;
}