import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { ColumnsModule } from "./columns/columns.module";
import { CardsModule } from "./cards/cards.module";
import { CommentsModule } from "./comments/comments.module";
import { Columns } from "./columns/columns.model";
import { Card } from "./cards/cards.model";
import { Comment } from "./comments/comments.model";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  providers: [],
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
      models: [User, Columns, Card, Comment],
      autoLoadModels: true,
      // sync: {force: true}
    }),
    UsersModule,
    ColumnsModule,
    CardsModule,
    CommentsModule,
    AuthModule,
  ],
})
export class AppModule {}
