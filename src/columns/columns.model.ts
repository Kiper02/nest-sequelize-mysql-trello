import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, ForeignKey, HasMany, Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";
import { Card } from "src/cards/cards.model";
import { User } from "src/users/users.model";

interface ColumnCreationAttrs {
  name: string;
}

@Table({ tableName: "columns" })
export class Columns extends Model<Columns, ColumnCreationAttrs> {
  @ApiProperty({ example: "1", description: "Уникальный индификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: "Нужно сделать", description: "Название колонки" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({ example: "2", description: "id пользователя" })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  user_id: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Card)
  cards: Card[];
}
