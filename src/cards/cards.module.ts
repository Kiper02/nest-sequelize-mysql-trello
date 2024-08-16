import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Card } from './cards.model';
import { Columns } from 'src/columns/columns.model';

@Module({
    providers: [CardsService],
    controllers: [CardsController],
    imports: [
        SequelizeModule.forFeature([Card, Columns])
    ]
})
export class CardsModule {}
