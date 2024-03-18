export class UpdatePostDto {
    readonly postId: number;
    readonly title: string;
    readonly content: string;
    readonly keywords: string;
    readonly categoryId: number;
}