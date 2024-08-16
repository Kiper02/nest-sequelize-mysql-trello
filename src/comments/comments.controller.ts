import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Card } from 'src/cards/cards.model';
import { ColumnsService } from 'src/columns/columns.service';
import { CreateCommentDto } from './dto/create-comments-dto';
import { CommentsService } from './comments.service';
import { Comment } from './comments.model';

@Controller('comments')
export class CommentsController {

    constructor(private commentsService: CommentsService) {}

    @ApiOperation({summary: 'Создание комментария'})
    @ApiResponse({status: 200, type: Card})
    @Post()
    create(@Body() commentDto: CreateCommentDto) {
        return this.commentsService.create(commentDto)
    }

    @ApiOperation({summary: 'Получение комментария'})
    @ApiResponse({status: 200, type: [Comment]})
    @Get()
    getAll(@Body() commentDto: CreateCommentDto) {
        return this.commentsService.getAll(commentDto.card_id);
    }
}
