import { Role } from "./roles.model";



export const rolesProviders = [
    {
        provide: 'ROLES_REPOSITIRY',
        useValue: Role,

    },
];