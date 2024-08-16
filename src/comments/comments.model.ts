import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, ForeignKey, Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";
import { Card } from "src/cards/cards.model";

interface CommentCreationAttrs {
  text: string;
}

@Table({ tableName: "comments" })
export class Comment extends Model<Comment, CommentCreationAttrs> {
  @ApiProperty({ example: "1", description: "Уникальный индификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Напишите комментарий", description: "Комментарий" })
  @Column({ type: DataType.STRING, allowNull: false })
  text: string;

  @ApiProperty({
    example: "2",
    description: "id карточки",
  })
  @ForeignKey(() => Card)
  @Column({ type: DataType.INTEGER, allowNull: false })
  card_id: number;

  @BelongsTo(() => Card)
  card: Card;
}
