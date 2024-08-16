import { ApiProperty } from "@nestjs/swagger";

export class CreateCommentDto {
  @ApiProperty({ example: "Напишите комментарий", description: "Комментарий" })
  readonly text: string;

  @ApiProperty({
    example: "2",
    description: "id карточки",
  })
  readonly card_id: string;
}