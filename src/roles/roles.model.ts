import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles.models";

interface RoleCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({ example: "1", description: "Уникальный индификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: "ADMIN", description: "Значение роли пользователя" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;
  @ApiProperty({ example: "Администратор", description: "Описание роли" })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
