import { ApiProperty } from "@nestjs/swagger";

export class CreateCardDto {
  @ApiProperty({
    example: "Вступительное собрание",
    description: "Название карточки",
  })
  readonly name: string;

  @ApiProperty({
    example: "Добавить более подробное описание",
    description: "Описание",
  })
  readonly description: string;

  @ApiProperty({
    example: "2",
    description: "id колонки",
  })
  readonly id: string;
}
