import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database.module";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { RolesModule } from './roles/roles.module';
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from 'path';
import { CategoriesModule } from "./categories/categories.module";
import { PrometheusModule } from "@willsoto/nestjs-prometheus";
import { AppService } from "./app.service";
import { LoggingInterceptor } from "./logging.interceptor";
import { APP_INTERCEPTOR } from "@nestjs/core";


@Module( {
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
        }),
        UsersModule,
        RolesModule, 
        UserRoles, AuthModule, PostsModule, FilesModule, CategoriesModule, PrometheusModule.register({
            path: "/mymetrics"
        })
    ],
    providers: [
        AppService,
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggingInterceptor
        }
    ],
})
export class AppModule {

}