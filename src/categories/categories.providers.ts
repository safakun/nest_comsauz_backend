import { Category } from "./categories.model";

export const categoriesProviders = [
    {
        provide: 'CATEGORIES_REPOSITORY',
        useValue: Category,

    },
];