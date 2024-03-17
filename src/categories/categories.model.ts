import { ApiProperty } from "@nestjs/swagger";
import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Post } from "src/posts/posts.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
import { User } from "src/users/users.model";


interface CategoriesCreationAttrs {
    title: string;
}

@Table({tableName: 'categories'})
export class Category extends Model<Category, CategoriesCreationAttrs> {

    @ApiProperty({ example: '1', description: 'Unique identifier' })
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({ example: 'My new category', description: 'Category title' })
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    // @HasMany(() => Post)
    // posts: Post[]


    // @ForeignKey(() => User)
    // @Column({type: DataType.INTEGER})
    // userId: number;

    // @ApiProperty({ example: 'John Doe', description: 'Author of the post' })
    // @BelongsTo(() => User)
    // author: User

}

function HasMany(arg0: () => typeof Post): (target: Category, propertyKey: "posts") => void {
    throw new Error("Function not implemented.");
}
