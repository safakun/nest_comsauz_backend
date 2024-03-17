import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { User } from 'src/users/users.model';
import { UserRoles } from './user-roles.model';
import { Role } from './roles.model';
import { rolesProviders } from './roles.providers';

@Module({
  providers: [RolesService, 
  ...rolesProviders],
  controllers: [RolesController],
  imports: [User, UserRoles],
  exports: [
    RolesService
  ]
})
export class RolesModule {}
