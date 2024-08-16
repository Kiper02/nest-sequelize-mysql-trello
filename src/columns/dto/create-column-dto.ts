import { ApiProperty } from "@nestjs/swagger";

export class CreateColumnDto {
  @ApiProperty({ example: "Нужно сделать", description: "Название колонки" })
  readonly name: string;
}
