import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { RolesModule } from "./roles/roles.module";
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.models";
import { ColumnsModule } from './columns/columns.module';
import { CardsController } from './cards/cards.controller';
import { CardsService } from './cards/cards.service';
import { CardsModule } from './cards/cards.module';
import { CommentsModule } from './comments/comments.module';
import { Columns } from "./columns/columns.model";

@Module({
  controllers: [CardsController],
  providers: [CardsService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: "mysql",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [User, Role, UserRoles, Columns],
      autoLoadModels: true,
      //   sync: {force: true}
    }),
    UsersModule,
    RolesModule,
    ColumnsModule,
    CardsModule,
    CommentsModule,
  ],
})
export class AppModule {}
