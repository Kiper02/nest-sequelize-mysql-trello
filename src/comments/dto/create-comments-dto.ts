import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class CreateCommentDto {
  @IsString({ message: "Должно быть строкой" })
  @Length(5, 20, { message: "Не менее 5 и не более 20 символов" })
  @ApiProperty({ example: "Напишите комментарий", description: "Комментарий" })
  readonly text: string;

  @IsString({ message: "Должно быть строкой" })
  @ApiProperty({
    example: "2",
    description: "id карточки",
  })
  readonly card_id: string;
}
