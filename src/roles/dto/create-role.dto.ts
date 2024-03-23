import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty({ example: 'ADMIN', description: 'Name of the role of user' })
    readonly value: string;
    @ApiProperty({ example: 'Site Administrator', description: 'Description of the role' })
    readonly description: string;
}