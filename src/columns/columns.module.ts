import { Module } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { ColumnsController } from './columns.controller';
import { Columns } from './columns.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Card } from 'src/cards/cards.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [ColumnsService],
  controllers: [ColumnsController],
  imports: [
    SequelizeModule.forFeature([Columns, Card]),
    AuthModule
  ]
})
export class ColumnsModule {}
