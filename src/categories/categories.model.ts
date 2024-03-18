import { ApiProperty } from "@nestjs/swagger";
import {BelongsTo, HasMany, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Post } from "src/posts/posts.model";



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

    @HasMany(() => Post)
    posts: Post[]

}

// function HasMany(arg0: () => typeof Post): (target: Category, propertyKey: "posts") => void {
//     throw new Error("Function not implemented.");
// }
