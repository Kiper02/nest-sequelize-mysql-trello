import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, ForeignKey, HasMany, Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";
import { Columns } from "src/columns/columns.model";
import { Comment } from "src/comments/comments.model";

interface CardCreationAttrs {
  name: string;
  description: string;
}

@Table({ tableName: "cards" })
export class Card extends Model<Card, CardCreationAttrs> {
  @ApiProperty({ example: "1", description: "Уникальный индификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "Вступительное собрание",
    description: "Название карточки",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({
    example: "Добавить более подробное описание",
    description: "Описание",
  })
  @Column({ type: DataType.STRING, allowNull: true })
  description: string;

  @ApiProperty({
    example: "2",
    description: "id колонки",
  })
  @ForeignKey(() => Columns)
  @Column({ type: DataType.INTEGER, allowNull: false })
  column_id: number;

  @BelongsTo(() => Columns)
  column: Columns;

  @HasMany(() => Comment)
  comments: Comment[];
}
