import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class CreateCardDto {
  @IsString({ message: "Должно быть строкой" })
  @Length(5, 20, { message: "Не менее 5 и не более 20 символов" })
  @ApiProperty({
    example: "Вступительное собрание",
    description: "Название карточки",
  })
  readonly name: string;

  @IsString({ message: "Должно быть строкой" })
  @Length(5, 20, { message: "Не менее 5 и не более 100 символов" })
  @ApiProperty({
    example: "Добавить более подробное описание",
    description: "Описание",
  })
  readonly description: string;

  @IsString({ message: "Должно быть строкой" })
  @ApiProperty({
    example: "2",
    description: "id колонки",
  })
  readonly id: string;
}
