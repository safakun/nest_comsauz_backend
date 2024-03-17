
export class CreatePostDto {
    readonly title: string;
    readonly content: string;
    readonly keywords: string;
    readonly userId: number;
    readonly categoryId: number;
}