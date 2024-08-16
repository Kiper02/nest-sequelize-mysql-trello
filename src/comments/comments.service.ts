import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Comment } from "./comments.model";
import { CreateCommentDto } from "./dto/create-comments-dto";


@Injectable()
export class CommentsService {
  constructor(@InjectModel(Comment) private columnModel: typeof Comment) {}

  async create(dto: CreateCommentDto) {
    const comment = await this.columnModel.create(dto);
    return comment;
  }

  async getAll(id: string) {
    const card_id = Number(id);
    const comments = await this.columnModel.findAll({ where: { card_id } });
    return comments;
  }

  
}
