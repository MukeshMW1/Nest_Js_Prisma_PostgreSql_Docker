import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateCommentDto {
@IsNotEmpty()
@MaxLength(200)
content:any


}
