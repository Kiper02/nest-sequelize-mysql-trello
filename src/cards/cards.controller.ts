import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CardsService } from './cards.service';
import { Card } from './cards.model';
import { CreateCardDto } from './dto/create-card-dto';


@ApiTags('Карточки')
@Controller('cards')
export class CardsController {

    constructor(private cardsService: CardsService) {}

    @ApiOperation({summary: 'Создание карточки'})
    @ApiResponse({status: 200, type: Card})
    @Post()
    create(@Body() cardDto: CreateCardDto) {
        return this.cardsService.create(cardDto)
    }

    @ApiOperation({summary: 'Получени карточек'})
    @ApiResponse({status: 200, type: [Card]})
    @Get()
    getAll() {
        return this.cardsService.getAll();
    }

    @ApiOperation({summary: 'Получени карточек'})
    @ApiResponse({status: 200, type: [Card]})
    @Get()
    getCardsToColumn(@Body() cardDto: CreateCardDto) {
        return this.cardsService.getAlltoColumn(cardDto.id);
    }
}