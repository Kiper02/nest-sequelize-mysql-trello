import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "user@mail.ru", description: "Почтовый адрес" })
  @IsString({ message: "Должно быть строкой" })
  @IsEmail({}, { message: "Некорректный email" })
  readonly email: string;
  @ApiProperty({ example: "testPassword123", description: "Пароль" })
  @IsString({ message: "Должно быть строкой" })
  readonly password: string;
  @ApiProperty({ example: "Test", description: "Имя" })
  @IsString({ message: "Должно быть строкой" })
  @Length(5, 20, { message: "Не менее 5 и не более 20 символов" })
  readonly name: string;
}
