import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class CreateColumnDto {
  @IsString({ message: "Должно быть строкой" })
  @Length(5, 20, { message: "Не менее 5 и не более 20 символов" })
  @ApiProperty({ example: "Нужно сделать", description: "Название колонки" })
  readonly name: string;

  @IsString({ message: "Должно быть строкой" })
  @ApiProperty({
    example: "2",
    description: "id пользователя",
  })
  readonly user_id: string;
}
