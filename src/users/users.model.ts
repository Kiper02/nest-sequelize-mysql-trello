import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, HasMany, Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";
import { Columns } from "src/columns/columns.model";


interface UserCreationAttrs { 
    email: string; 
    password: string;  
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs>{
    @ApiProperty({example: '1', description: 'Уникальный индификатор'})
    @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;
  @ApiProperty({example: 'testPassword123', description: 'Пароль'})
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;
  @ApiProperty({example: 'Test', description: 'Имя'})
  @Column({ type: DataType.STRING, allowNull: false })
  name: string


  @HasMany(() => Columns, {foreignKey: 'user_id'})
  columns: Columns[]
}
