import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";

interface ColumnCreationAttrs { 
    name: string; 
}

@Table({ tableName: "columns" })
export class Columns extends Model<Columns, ColumnCreationAttrs>{
    @ApiProperty({example: '1', description: 'Уникальный индификатор'})
    @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({example: 'Нужно сделать', description: 'Название колонки'})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;
}
