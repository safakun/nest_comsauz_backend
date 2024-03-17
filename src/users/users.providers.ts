import { User } from "./users.model";


export const usersProviders = [
    {
        provide: 'USERS_REPOSITIRY',
        useValue: User,

    },
];