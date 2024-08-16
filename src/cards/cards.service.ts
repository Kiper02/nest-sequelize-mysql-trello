import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Card } from "./cards.model";
import { CreateCardDto } from "./dto/create-card-dto";

@Injectable()
export class CardsService {
  constructor(@InjectModel(Card) private cardModel: typeof Card) {}

  async create(dto: CreateCardDto) {
    const card = await this.cardModel.create(dto);
    return card;
  }

  async getOne(id: string) {
    const id_card = Number(id);
    const card = await this.cardModel.findOne({ where: { id: id_card } });
    return card;
  }

  async getAll() {
    const card = await this.cardModel.findAll();
    return card;
  }

  async getAlltoColumn(id: string) {
    const column_id = Number(id);
    const cards = await this.cardModel.findAll({ where: { column_id } });
    return cards;
  }
}
