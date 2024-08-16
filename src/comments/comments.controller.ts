import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Card } from 'src/cards/cards.model';
import { ColumnsService } from 'src/columns/columns.service';
import { CreateCommentDto } from './dto/create-comments-dto';
import { CommentsService } from './comments.service';
import { Comment } from './comments.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@ApiTags('Комментарии')
@Controller('comments')
export class CommentsController {

    constructor(private commentsService: CommentsService) {}

    @ApiOperation({summary: 'Создание комментария'})
    @ApiResponse({status: 200, type: Card})
    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() commentDto: CreateCommentDto) {
        return this.commentsService.create(commentDto)
    }

    @ApiOperation({summary: 'Получение комментария'})
    @ApiResponse({status: 200, type: [Comment]})
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll(@Body() commentDto: CreateCommentDto) {
        return this.commentsService.getAll(commentDto.card_id);
    }
}
