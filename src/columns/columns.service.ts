import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Columns } from "./columns.model";
import { CreateColumnDto } from "./dto/create-column-dto";

@Injectable()
export class ColumnsService {
  constructor(@InjectModel(Columns) private columnModel: typeof Columns) {}

  async create(dto: CreateColumnDto) {
    const column = await this.columnModel.create(dto);
    return column;
  }

  async getOne(id: string) {
    const id_column = Number(id);
    const column = await this.columnModel.findOne({ where: { id: id_column } });
    return column;
  }

  async getAll() {
    const columns = await this.columnModel.findAll();
    return columns;
  }
}
