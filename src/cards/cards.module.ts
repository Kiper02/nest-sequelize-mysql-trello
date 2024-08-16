import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Card } from './cards.model';
import { Columns } from 'src/columns/columns.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    providers: [CardsService],
    controllers: [CardsController],
    imports: [
        SequelizeModule.forFeature([Card, Columns]),
        AuthModule
    ]
})
export class CardsModule {}
