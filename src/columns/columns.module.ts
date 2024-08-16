import { Module } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { ColumnsController } from './columns.controller';
import { Columns } from './columns.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  providers: [ColumnsService],
  controllers: [ColumnsController],
  imports: [
    SequelizeModule.forFeature([Columns])
  ]
})
export class ColumnsModule {}
