import { ApiProperty } from "@nestjs/swagger";

export class CreateColumnDto {
  @ApiProperty({ example: "Нужно сделать", description: "Название колонки" })
  readonly name: string;
  @ApiProperty({
    example: "2",
    description: "id пользователя",
  })
  readonly user_id: string;
}
