import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.models";

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

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
