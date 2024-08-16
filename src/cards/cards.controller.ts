import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CardsService } from './cards.service';
import { Card } from './cards.model';
import { CreateCardDto } from './dto/create-card-dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@ApiTags('Карточки')
@Controller('cards')
export class CardsController {

    constructor(private cardsService: CardsService) {}

    @ApiOperation({summary: 'Создание карточки'})
    @UsePipes(ValidationPipe)
    @ApiResponse({status: 200, type: Card})
    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() cardDto: CreateCardDto) {
        return this.cardsService.create(cardDto)
    }

    @ApiOperation({summary: 'Получени карточек'})
    @ApiResponse({status: 200, type: [Card]})
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.cardsService.getAll();
    }

    @ApiOperation({summary: 'Получени карточек'})
    @UsePipes(ValidationPipe)
    @ApiResponse({status: 200, type: [Card]})
    @UseGuards(JwtAuthGuard)
    @Get()
    getCardsToColumn(@Body() cardDto: CreateCardDto) {
        return this.cardsService.getAlltoColumn(cardDto.id);
    }
}