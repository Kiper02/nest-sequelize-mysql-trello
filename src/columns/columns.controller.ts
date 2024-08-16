import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ColumnsService } from './columns.service';
import { Column } from 'sequelize-typescript';
import { CreateColumnDto } from './dto/create-column-dto';



@ApiTags('Колонки')
@Controller('columns')
export class ColumnsController {

    constructor(private columnsService: ColumnsService) {}

    @ApiOperation({summary: 'Создание колонки'})
    @ApiResponse({status: 200, type: Column})
    @Post()
    create(@Body() columnDto: CreateColumnDto) {
        return this.columnsService.create(columnDto)
    }

    @ApiOperation({summary: 'Получение всех колонок'})
    @ApiResponse({status: 200, type: [Column]})
    @Get()
    getAll() {
        return this.columnsService.getAll();
    }

    @ApiOperation({summary: 'Получение колонки'})
    @ApiResponse({status: 200, type: [Column]})
    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.columnsService.getOne(id)
    }
}
