import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ColumnsService } from './columns.service';
import { Column } from 'sequelize-typescript';
import { CreateColumnDto } from './dto/create-column-dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';



@ApiTags('Колонки')
@Controller('columns')
export class ColumnsController {

    constructor(private columnsService: ColumnsService) {}

    @ApiOperation({summary: 'Создание колонки'})
    @ApiResponse({status: 200, type: Column})
    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() columnDto: CreateColumnDto) {
        return this.columnsService.create(columnDto)
    }

    @ApiOperation({summary: 'Получение всех колонок'})
    @ApiResponse({status: 200, type: [Column]})
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.columnsService.getAll();
    }

    @ApiOperation({summary: 'Получение колонки'})
    @ApiResponse({status: 200, type: [Column]})
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.columnsService.getOne(id)
    }
}
