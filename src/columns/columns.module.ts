import { Module } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { ColumnsController } from './columns.controller';
import { Columns } from './columns.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Card } from 'src/cards/cards.model';

@Module({
  providers: [ColumnsService],
  controllers: [ColumnsController],
  imports: [
    SequelizeModule.forFeature([Columns, Card])
  ]
})
export class ColumnsModule {}
